import styled from "styled-components";
import { COLOR } from "../../styles/color";

import { useRecoilState, useRecoilValue } from "recoil";

import Chip from "@mui/material/Chip";
import { Autocomplete, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const FixedOptionShowSelect = (props) => {
  const fixedOptions = ["React", "Python"];

  const [selectValue, setSelectValue] = useRecoilState(props.type);
  console.log("dddd:", selectValue);

  const handleDelete = (target) => {
    console.log(`${target}이 click`);
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
              //   {...getTagProps({ option })}
              bgColor={
                fixedOptions.includes(option)
                  ? COLOR.MAIN_HOVER
                  : COLOR.MAIN_BLUE
              }
              labelColor={
                fixedOptions.includes(option)
                  ? COLOR.MAIN_BLUE
                  : COLOR.MAIN_WHITE
              }
              deleteIcon={<ClearIcon />}
              onDelete={
                fixedOptions.includes(option)
                  ? undefined
                  : () => handleDelete(option)

                // handleDelete(target)
              }
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
  margin-top: 2rem;
  height: 100%;
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
  margin: 0.2rem;
  padding: 0 0 0 0rem;
  height: 2.8rem;
  border-radius: 1rem;
  background-color: ${(props) => props.bgColor};

  & .MuiChip-root {
    padding: 0;
  }
  & .MuiChip-label {
    font-size: 1.1rem;
    color: ${(props) => props.labelColor};
  }
  & .MuiChip-deleteIcon {
    color: white;
    font-size: 1.5rem;
  }
`;
