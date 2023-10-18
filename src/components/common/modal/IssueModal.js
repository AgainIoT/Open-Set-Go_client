import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import React, { useState, useMemo, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../../recoil/commonState";
import {
  issueSelectedState,
  selectedTitle,
  bodyState,
  selectedType
} from "../../../recoil/issueState";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Form } from "react-router-dom";

const IssueModal = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [nameOk, setNameOk] = useState(true);
  const [descOk, setDescOk] = useState(true);
  const [body, setBody] = useRecoilState(bodyState);
  const [temType, setTemType] = useRecoilState(selectedType);
  const [temTitle, setTemTitle] = useRecoilState(selectedTitle);
  const [selectedInfo, setSelectedInfo] = useRecoilState(
    issueSelectedState("issue"),
  );

  const [userInput, setUserInput] = useState({
    uname: "",
    desc: "",
    title: "",
  });
  const [modalValue, setModalValue] = useRecoilState(modalState("issue"));
  const handleClose = () => {
    setModalValue(false);
    setUserInput({
      uname: "",
      desc: "",
      title: "",
    });
  };

  function NameFormHelperText() {
    const helperText = useMemo(() => {
      if (userInput.uname.length < 3) {
        return "Name must have at least 3 characters.";
      } if (userInput.uname.includes("\"")) {
        return "doublequote cannot be used";
      }
      return " ";
    }, [userInput.uname]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  function DescFormHelperText() {
    const helperText = useMemo(() => {
      if (userInput.desc.length < 3) {
        return "Description must have at least 3 characters.";
      } if (userInput.desc.includes("\"")) {
        return "doublequote cannot be used";
      }
      return " ";
    }, [userInput.desc]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }
  const handleChangeState = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      userInput.uname.length > 3 &&
      userInput.desc.length > 3 &&
      !userInput.uname.includes("\"") &&
      !userInput.desc.includes("\"")
    ) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  }, [userInput.uname, userInput.desc]);

  const handleFinish = (e) => {
    const tmp =
      `---
name: "${userInput.uname}"
description: "${userInput.desc}"
title: "${userInput.title}"
labels: []
assignees: []\n
` + body;
    setSelectedInfo([
      ...selectedInfo,
      {
        type: temTitle,
        content: tmp,
      },
    ]);
    setUserInput({
      uname: "",
      desc: "",
      title: "",
    });
    setModalValue(false);
    setTemType(temType);
  };
  return (
    <StIssueModal>
      <ThemeProvider theme={theme}>
        <TitleTypo variant="h3">Create a Issue template</TitleTypo>
        <ExplainText>
          Required fields are marked with an asterisk (*).
        </ExplainText>
        <InputDiv>
          <ObjectP>Name*</ObjectP>
          <FormControl>
            <InputWrapper
              name="uname"
              placeholder="🐛 Bug Report"
              value={userInput.uname}
              onChange={(e) => {
                handleChangeState(e);
              }}
            />
            <NameFormHelperText />
          </FormControl>

          <ObjectP>Description*</ObjectP>
          <FormControl>
            <InputWrapper
              name="desc"
              placeholder="Report a bug"
              value={userInput.desc}
              onChange={(e) => {
                handleChangeState(e);
              }}
              maxLength={200}
            />
            <DescFormHelperText />
          </FormControl>

          <ObjectP>Title (optional)</ObjectP>
          <InputWrapper
            name="title"
            placeholder="🐛 [BUG] - <title>"
            value={userInput.title}
            onChange={handleChangeState}
          />
        </InputDiv>
        <ButtonContainer>
          <CancelBtnWrapper
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            CANCEL
          </CancelBtnWrapper>
          {isFinished ? (
            <FinishBtnWrapper
              variant="contained"
              color="primary"
              onClick={handleFinish}
            >
              FINISH
            </FinishBtnWrapper>
          ) : (
            <FinishBtnWrapper
              variant="contained"
              color="primary"
              onClick={handleFinish}
              disabled
            >
              FINISH
            </FinishBtnWrapper>
          )}
        </ButtonContainer>
      </ThemeProvider>
    </StIssueModal>
  );
};

export default IssueModal;

const StIssueModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  align-content: flex-start;
  flex-direction: column;
  width: 70%;
  height: 100%;
`;

const TitleTypo = styled(Typography)`
  font-family: sans-serif;
  font-size: 2.2rem;
  font-weight: 550;
  padding-top: 1rem;
`;

const ExplainText = styled.p`
  margin: 0.5rem 0rem 2rem 0rem;
  font-size: 1.1rem;
  font-weight: 300;
  font-style: italic;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  width: 100%;
`;

const ObjectP = styled.p`
  margin-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const InputWrapper = styled(OutlinedInput)`
  height: fit-content;
  font-size: 1.5rem;
  border-radius: 1rem;
  border: 0.1rem solid black;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    &::-webkit-input-placeholder {
      color: transparent;
    }
    &::-moz-placeholder {
      color: transparent;
    }
    &:-ms-input-placeholder {
      color: transparent;
    }
    &::-ms-input-placeholder {
      color: transparent;
    }
  }
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const SharedBtn = `
  width: 8.5rem;
  height: 3.5rem;
  margin-top: 2rem;
  margin-left: 1rem;
  font-size: 1.2rem;
`;

const CancelBtnWrapper = styled(Button)`
  ${SharedBtn}
`;

const FinishBtnWrapper = styled(Button)`
  ${SharedBtn}
`;

const theme = createTheme({
  palette: {
    primary: { main: "#3E1B6C" },
  },
});
