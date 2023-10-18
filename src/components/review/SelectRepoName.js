import styled from "styled-components";
import { COLOR } from "../../styles/color";

import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";

export const SelectRepoName = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(
    props.dataState(props.type),
  );
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <SelectFormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native" shrink>
          {props.labelText}
        </InputLabel>
        <SelectAuto
          id="demo-customized-select-native"
          value={selectValue}
          onChange={handleChange}
          // input={<BootstrapInput />}
          readOnly={!props.isSelectOwner}
          displayEmpty
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Placeholder>Select your Repository</Placeholder>;
            }
            return selected;
          }}
        >
          <MenuItem disabled value="">
            <em>Select your Repository</em>
          </MenuItem>
          {props.data.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
          {/* <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </SelectAuto>
        {!props.isSelectOwner && (
          <SelectFormHelperText>
            Please choose the owner first
          </SelectFormHelperText>
        )}
      </SelectFormControl>
    </>
  );
};

const StSelectRepoName = styled.div``;

const SelectFormControl = styled(FormControl)``;
const SelectInputLabel = styled(InputLabel)``;
const SelectAuto = styled(Select)``;

const Placeholder = styled(Typography)`
  color: ${COLOR.FONT_GRAY};
`;

const SelectMenuItem = styled(MenuItem)``;

const SelectFormHelperText = styled(FormHelperText)`
  color: ${COLOR.MAIN_BLACK};
  ${SelectFormControl}:active & {
    color: ${COLOR.MAIN_RED};
  }
  ${SelectFormControl}:focus-within & {
    color: ${COLOR.MAIN_RED};
  }
`;
