import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

import HelpIcon from "@mui/icons-material/Help";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { TextField } from "@mui/material";
import { COLOR } from "../../styles/color";
import { useRecoilState, useRecoilValue } from "recoil";
import { repoDataAtomFamily } from "../../recoil/repoData";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

import axios from "axios";

export const TextInputContainer = (props) => {
  const textRef = useRef("");
  const [helperText, setHelperText] = useState(" ");
  const [inputValue, setInputValue] = useRecoilState(
    repoDataAtomFamily(props.type),
  );
  // const [checkValue, setCheckValue] = useRecoilState(
  //   repoDataAtomFamily("checkRepoName"),
  // );
  const owner = useRecoilValue(repoDataAtomFamily("owner"));
  // const [checkState, setCheckState] = useState({
  //   loading: false,
  //   check: false,
  // });

  /* GET - check repository is duplicate */
  const [checkState, setCheckState] = useState(false);

  // async function getCheckDuplication() {
  //   // async, await을 사용하는 경우
  //   // setCheckState({ loading: true, check: false });
  //   setHelperText("checking");
  //   console.log("get??:", textRef.current.value);

  //   try {
  //     // GET 요청은 params에 실어 보냄
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_SERVER_URL}/repo/checkDuplication`,
  //       {
  //         owner: owner,
  //         repoName: textRef.current.value,
  //       },
  //       {
  //         withCredentials: true,
  //       },
  //     );

  //     // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.
  //     // console.log("get?", repoName);
  //     if (response.data) {
  //       //setCheckState({ loading: false, check: true });
  //       setHelperText("checked");
  //     } else {
  //       //setCheckState({ loading: false, check: false });
  //       setHelperText("error");
  //     }

  //     console.log("getCheck: %o", response.data);
  //   } catch (e) {
  //     // 실패 시 처리
  //     console.error(e);
  //   }
  // }

  const handleOnChange = (e) => {
    // setInputValue(e.target.value);
    setInputValue(e.target.value);

    // if (props.useHelperText) {
    //   console.log("e", e.target.value);
    //   //setRepoName(e.target.value);
    //   //공백인 경우 defaultText로 바꾼다.
    //   if (e.target.value !== "") {
    //     console.log("eee:", e.target.value);
    //     console.log("refee:", textRef.current.value);
    //     console.log("currHelper:", helperText);
    //     getCheckDuplication();
    //   } else {
    //     setHelperText("null");
    //   }
    // }
  };

  const HelperTextContainer = (props) => {
    const checkIcon = <CheckCircleIcon fontSize="small" />;
    const warningIcon = <WarningRoundedIcon fontSize="small" />;
    console.log("asf:", props.currInput.current.value);
    console.log("hhhhhh:", helperText);
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
        type: "error",
        text: `The repository ${props.currInput.current.value} already exists on this account.`,
        textColor: COLOR.MAIN_RED,
        icon: warningIcon,
      },
    ];
    const useStyle = textData.find((it) =>
      currInput !== "" ? it.type === props.type : it.type === "null",
    );
    console.log("style:", useStyle?.text);
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
          <TooltipContainer title="test" arrow placement="top">
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
          />
        ) : (
          <InputField
            id="inputField"
            multiline
            fullWidth
            rows={props.fieldType}
            fieldsize={100}
            inputRef={textRef}
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
  /* min-width: 8rem; */
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
  gap: 0.5rem;

  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  color: ${COLOR.MAIN_BLACK};

  & .MuiFormLabel-root {
    transform-origin: center left;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const OptionLabel = styled.p`
  display: flex;
  color: ${COLOR.BORDER_GRAY};
  font-size: 1.1rem;
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
      box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.1);
      outline: none;
    }
    &:hover {
      border: none;
    }
    &::before {
      border: 0.1rem solid ${COLOR.MAIN_BORDER};
    }
    &::after {
      border: 1px solid purple;
    }
    &.Mui-focused {
      border: none;
      outline: none;
    }
  }

  & .MuiInputBase-input {
    position: relative;
    height: 3rem;

    border-radius: 0.4rem;

    font-size: 1.4rem;
    border: none;
    padding: 0;
    &:hover {
      outline: none;
    }
    &::before {
      border: 0.1rem solid ${COLOR.MAIN_BORDER};
    }
    &::after {
      border: 1px solid purple;
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

    /* &:focus-within {
      outline: none;
    } */
  }

  &.Mui-focused {
    border: none;
  }
  /* & .MuiInputBase-root::before {
    height: 3rem;
    border-radius: 20rem;
    border: none;
    //border: 0.1rem solid lightgray;
  } */

  & .MuiInput-root {
    &:hover {
      border-radius: 20rem;
      border: none;
      margin-top: 80px;
    }
  }

  &.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    border: none;
  }

  /* &.MuiInputBase-root
    .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {
    border: none;
    box-shadow: 0.1rem 0.2rem 0.9rem lightgray;
  } */

  &.Mui-error {
    border: 1px solid red;
  }
`;

const FormHelperTextWrapper = styled(FormHelperText)`
  font-size: 1rem;
  color: ${(props) => props.textcolor};
  &.MuiFormHelperText-root {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-left: 0.3rem;
  }
`;
