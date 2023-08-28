import styled from "styled-components";
import { COLOR } from "../../styles/color";

import { useRecoilState, useRecoilValue } from "recoil";

import Chip from "@mui/material/Chip";
import { Autocomplete, TextField } from "@mui/material";

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
            <Chip
              key={index}
              label={option}
              //   {...getTagProps({ option })}
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
          <TextField
            {...params}
            label="filterSelectedOptions"
            InputLabelProps={{ shrink: true }}
          />
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
  border: none;

  & .MuiFormLabel-root {
    font-size: 1.2rem;
  }
`;
