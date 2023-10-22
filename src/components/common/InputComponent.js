import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { TextField } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { repoDataAtomFamily } from "../../recoil/repoData";
import PropTypes from "prop-types";

export const TextInputContainer = (props) => {
  const textRef = useRef("");
  const [inputValue, setInputValue] = useRecoilState(
    repoDataAtomFamily(props.type),
  );

  // GET - check repository is duplicate

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const HelperTextContainer = (props) => {
    const checkIcon = <CheckCircleIcon fontSize="small" />;
    const warningIcon = <WarningRoundedIcon fontSize="small" />;
    const currInput = props.currInput.current.value;

    const textData = [
      {
        type: "null",
        text: "New repository name must not be blank - Great repository names are short and memorable.",
        textColor: COLOR.MAIN_BLUE,
        icon: warningIcon,
      },
      {
        type: "checking",
        text: "Checking availability...",
        textColor: COLOR.MAIN_BLACK,
        icon: warningIcon,
      },
      {
        type: "checked",
        text: `${props.currInput.current.value} is available`,
        textColor: COLOR.MAIN_GREEN,
        icon: checkIcon,
      },
      {
        type: "duplicated",
        text: `The repository ${props.currInput.current.value} already exists on this account.`,
        textColor: COLOR.MAIN_RED,
        icon: warningIcon,
      },
      {
        type: "invalid",
        text: `The repository name, ${props.currInput.current.value} is invalid.`,
        textColor: COLOR.MAIN_RED,
        icon: warningIcon,
      },
    ];
    const useStyle = textData.find((it) =>
      currInput !== "" ? it.type === props.type : it.type === "null",
    );
    return (
      <>
        <FormHelperTextWrapper textcolor={useStyle?.textColor}>
          {useStyle?.icon}
          <>{useStyle?.text}</>
        </FormHelperTextWrapper>
      </>
    );
  };

  return (
    <StInputContainer>
      <InputFormControl>
        <LabelContainer>
          <InputLabelWrapper shrink variant="standard" htmlFor="inputField">
            {props.labelText}
            {props.option && <OptionLabel>{props.option}</OptionLabel>}
          </InputLabelWrapper>
          <TooltipContainer title={<img src={props.gif} width='288rem' height='162rem' alt="gif"/>} arrow placement="top">
            <TooltipBtn>
              <HelpIcon />
            </TooltipBtn>
          </TooltipContainer>
        </LabelContainer>
        {props.fieldType === 1 ? (
          <InputField
            id="inputField"
            variant="outlined"
            fieldsize={5}
            inputRef={textRef}
            onInput={(e) => handleOnChange(e)}
            value={inputValue}
          />
        ) : (
          <InputField
            id="inputField"
            // multiline
            fullWidth
            // rows={props.fieldType}
            fieldsize={100}
            onInput={(e) => handleOnChange(e)}
            value={inputValue}
          />
        )}

        {props.useHelperText && (
          <HelperTextContainer currInput={textRef} type={props.helperText} />
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
  align-items: baseline;
  flex-direction: row;
`;

const InputLabelWrapper = styled(InputLabel)`
  display: flex;
  align-items: center;
  position: static;
  transform-origin: center left;
  height: 100%;
  gap: 0.5rem;
  color: ${COLOR.MAIN_BLACK};
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;

  & .MuiFormLabel-root {
    justify-content: center;
    align-items: center;
    transform-origin: center left;
    text-align: center;
  }
`;

const OptionLabel = styled.p`
  display: flex;
  color: ${COLOR.BORDER_GRAY};
  font-size: 1.1rem;
`;

const TooltipContainer = styled(Tooltip)`

  & .MuiTooltip-tooltip {
    transform-origin: center bottom; 
    margin-bottom: 0rem;
  }
`;

const TooltipBtn = styled(IconButton)`
  padding: 0%;
`;

const InputField = styled(TextField)`
  border: none;
  label + & {
    margin-top: 1rem;
  }
  background: white;

  & .MuiInputBase-root {
    /* border: none;
    outline: none; */
    padding: 1rem 2rem 1rem 2rem;

    // shadow
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.1);
    }
    &:hover {
      border: none;
    }
    &::before {
      border: 0.1rem solid ${COLOR.MAIN_BORDER};
    }

    &.Mui-focused {
      border: none;
      outline: none;
    }
  }

  & .MuiInputBase-input {
    position: relative;
    height: 3rem;
    padding: 0;
    border: none;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    &:hover {
      outline: none;
    }
    &::before {
      border: 0.1rem solid ${COLOR.MAIN_BORDER};
    }
  }

  & .MuiOutlinedInput-root {
    border: none;

    &:hover {
      border: none;
    }
    &.Mui-focused {
      box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.1);
    }
  }

  &.Mui-focused {
    border: none;
  }

  & .MuiInput-root {
    &:hover {
      margin-top: 8rem;
      border: none;
      border-radius: 20rem;
    }
  }

  &.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    border: none;
  }

  &.Mui-error {
    border: 0.1rem solid red;
  }
`;

const FormHelperTextWrapper = styled(FormHelperText)`
  color: ${(props) => props.textcolor};
  font-size: 1rem;
  &.MuiFormHelperText-root {
    display: flex;
    flex-direction: row;
    margin-left: 0.3rem;
    gap: 0.5rem;
  }
`;
