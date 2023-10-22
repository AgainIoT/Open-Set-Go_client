import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRecoilState } from "recoil";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const SelectRepoName = (props) => {
  const [selectValue, setSelectValue] = useRecoilState(
    props.dataState(props.type),
  );
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <StSelectRepoName>
      <SelectFormControl sx={{ m: 1 }} variant="standard">
        <SelectInputLabel htmlFor="demo-customized-select-native" shrink>
          {props.labelText}
        </SelectInputLabel>
        <SelectAuto
          id="demo-customized-select-native"
          value={selectValue}
          onChange={handleChange}
          readOnly={!props.isSelectOwner}
          displayEmpty
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Placeholder>Select your Repository</Placeholder>;
            }
            return selected;
          }}
        >
          <SelectMenuItem disabled value="">
            <em>Select your Repository</em>
          </SelectMenuItem>
          {props.data.map((option) => (
            <SelectMenuItem key={option} value={option}>
              {option}
            </SelectMenuItem>
          ))}
        </SelectAuto>
        {!props.isSelectOwner && (
          <SelectFormHelperText>
            Please choose the owner first
          </SelectFormHelperText>
        )}
      </SelectFormControl>
    </StSelectRepoName>
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
