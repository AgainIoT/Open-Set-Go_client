import styled from "styled-components";
import { COLOR } from "../../styles/color";

import { useRecoilValue } from "recoil";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip } from "@mui/material";

export const ReadonlyAuto = (props) => {
  const showData = useRecoilValue(props.data);

  const flatProps = {
    options: showData.map((option) => option) || "",
  };

  return (
    <StReadOnlyAuto>
      <ReadOnlyAutoContainer
        readOnly
        multiple
        limitTags={4}
        freeSolo
        id="tags-filled"
        options={showData.filter((it) => it) || ""}
        getOptionLabel={(option) => option}
        value={showData.filter((it) => it)}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <ShowChipItme
              key={index}
              label={option}
              //   {...getTagProps({ option })}
              bgcolor={
                props.fixedData.includes(option)
                  ? COLOR.MAIN_HOVER
                  : COLOR.MAIN_BLUE
              }
              labelcolor={
                props.fixedData.includes(option)
                  ? COLOR.MAIN_BLUE
                  : COLOR.MAIN_WHITE
              }
            />
          ))
        }
        renderInput={(params) => <ReadOnlyTextField {...params} label="" />}
      />
    </StReadOnlyAuto>
  );
};

const StReadOnlyAuto = styled.div``;
const ReadOnlyAutoContainer = styled(Autocomplete)`
  & .MuiInputBase-root {
    padding: 1rem 0 1rem 0rem;
    background-color: ${COLOR.MAIN_WHITE};
    border: none;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  & .MuiFilledInput-root {
    padding: 0.7rem 0.5rem;
  }

  & .MuiFormLabel-root::after {
    line-height: 4.5rem;
  }
  & .MuiChip-root {
    border-radius: 1rem;
  }
  & .MuiChip-label {
    font-size: 1.1rem;
  }
`;

const ReadOnlyTextField = styled(TextField)`
  font-size: 1.6rem;

  & .MuiInputLabel-root {
    display: flex;
    font-size: 1.4rem;
    line-height: 5rem;
  }

  & .MuiChip-root {
    font-size: 1.2rem;
  }
`;

const ShowChipItme = styled(Chip)`
  margin: 0.2rem;
  padding: 0 0 0 0rem;
  height: 2.8rem;
  border-radius: 1rem;
  background-color: ${(props) => props.bgcolor};

  & .MuiChip-root {
    padding: 0;
  }
  & .MuiChip-label {
    font-size: 1.1rem;
    color: ${(props) => props.labelcolor};
  }
  & .MuiChip-deleteIcon {
    color: white;
    font-size: 1.5rem;
  }
`;
