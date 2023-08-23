import styled from "styled-components";
import PropTypes from "prop-types";

import HelpIcon from "@mui/icons-material/Help";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";

import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export const TextInputContainer = ({ labelText, fieldType }) => {
  return (
    <StInputContainer>
      <InputFormControl>
        <LabelContainer>
          <InputLabelWrapper shrink variant="standard" htmlFor="inputField">
            {labelText}
          </InputLabelWrapper>
          <TooltipContainer title="test" arrow placement="top">
            <TooltipBtn>
              <HelpIcon />
            </TooltipBtn>
          </TooltipContainer>
        </LabelContainer>
        {fieldType === 1 ? (
          <InputField id="inputField" variant="outlined" fieldsize={5} />
        ) : (
          <InputField
            id="inputField"
            multiline
            fullWidth
            rows={fieldType}
            fieldsize={100}
          />
        )}
      </InputFormControl>
    </StInputContainer>
  );
};

TextInputContainer.propTypes = { labelText: PropTypes.string.isRequired };

const StInputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const InputFormControl = styled(FormControl)`
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const InputLabelWrapper = styled(InputLabel)`
  display: flex;
  position: static;
  height: 100%;
  align-items: center;
  transform-origin: center left;

  font-size: 1.6rem;
  text-align: center;
  & .MuiFormLabel-root {
    transform-origin: center left;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const TooltipContainer = styled(Tooltip)`
  & .MuiTooltip-popper {
    transform-origin: center bottom;
    margin-bottom: 0rem;
  }
`;

const TooltipBtn = styled(IconButton)`
  padding: 0%;
`;

const InputField = styled(InputBase)`
  label + & {
    margin-top: 1rem;
  }
  background: white;

  & .MuiInputBase-input {
    position: relative;
    border: 1px solid lightgray;
    border-radius: 0.4rem;
    padding: 1rem 1.2rem;

    &:focus {
      border-color: rgb(25, 118, 210);
      box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.1);
    }
  }
`;
