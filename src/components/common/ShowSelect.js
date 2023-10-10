import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilState } from "recoil";
import { Autocomplete, TextField, Chip } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const FixedOptionShowSelect = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(props.type);

  const handleDelete = (target) => {
    const newChipList = selectValue.filter((it) => it !== target);
    setSelectValue(newChipList);
  };

  return (
    <StFixedOptionShowSelect>
      <SelectContainer
        multiple
        readOnly
        options={selectValue}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.toString()
        }
        value={selectValue}
        freeSolo
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <ShowChipItme
              key={index}
              label={option}
              bgcolor={COLOR.MAIN_BLUE}
              labelcolor={COLOR.MAIN_WHITE}
              deleteIcon={<ClearIcon />}
              onDelete={() => handleDelete(option)}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="" InputLabelProps={{ shrink: true }} />
        )}
      />
    </StFixedOptionShowSelect>
  );
};

const StFixedOptionShowSelect = styled.div`
  display: flex;
  height: 100%;
  margin-top: 2rem;
`;

const SelectContainer = styled(Autocomplete)`
  display: flex;
  width: 100%;

  & .MuiAutocomplete-root {
    border: none;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const ShowChipItme = styled(Chip)`
  height: 2.8rem;
  padding: 0 0 0 0rem;
  margin: 0.2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.bgcolor};

  & .MuiChip-root {
    padding: 0;
  }
  & .MuiChip-label {
    color: ${(props) => props.labelcolor};
    font-size: 1.1rem;
  }
  & .MuiChip-deleteIcon {
    color: white;
    font-size: 1.5rem;
  }
`;
