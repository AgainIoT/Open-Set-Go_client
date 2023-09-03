import styled from "styled-components";
import { COLOR } from "../../styles/color";

import { useRecoilValue } from "recoil";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const ReadonlyAuto = (props) => {
  const showData = useRecoilValue(props.data);

  return (
    <StReadOnlyAuto>
      <ReadOnlyAutoContainer
        readOnly
        multiple
        limitTags={4}
        freeSolo
        id="tags-filled"
        options={showData.map((option) => option.value)}
        value={showData.map((option) => option.value)}
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
