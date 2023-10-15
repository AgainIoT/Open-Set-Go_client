import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../../recoil/commonState";
import {
  issueSelectedState,
  selectedTitle,
  bodyState,
} from "../../../recoil/issueState";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const IssueModal = () => {
  const [body, setBody] = useRecoilState(bodyState);
  const [temTitle, setTemTitle] = useRecoilState(selectedTitle);
  const [selectedInfo, setSelectedInfo] = useRecoilState(
    issueSelectedState({
      type: "",
      content: "",
    }),
  );

  const [userInput, setUserInput] = useState({
    uname: "",
    desc: "",
    title: "",
  });
  const [modalValue, setModalValue] = useRecoilState(modalState("issue"));
  const handleClose = () => setModalValue(false);
  const handleChangeState = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleFinish = (e) => {
    const tmp =
      `---
name: "${userInput.uname}"
description: ${userInput.desc}
title: "${userInput.title}"
labels: []
assignees: []\n
` + body;
    setSelectedInfo([
      ...selectedInfo,
      {
        type: temTitle,
        body: tmp,
      },
    ]);
    setUserInput({
      uname: "",
      desc: "",
      title: "",
    });
    setModalValue(false);
  };
  return (
    <StIssueModal>
      <TitleTypo variant="h3">Create a Issue template</TitleTypo>
      <InputDiv>
        <ObjectP>name</ObjectP>
        <InputFormControl variant="outlined" color="primary">
          <InputWrapper
            name="uname"
            value={userInput.uname}
            onChange={handleChangeState}
          />
        </InputFormControl>
        <ObjectP>description</ObjectP>
        <InputFormControl variant="outlined">
          <InputWrapper
            name="desc"
            value={userInput.desc}
            onChange={handleChangeState}
          />
        </InputFormControl>
        <ObjectP>title</ObjectP>
        <InputFormControl variant="outlined">
          <InputWrapper
            name="title"
            value={userInput.title}
            onChange={handleChangeState}
          />
        </InputFormControl>
      </InputDiv>
      <ButtonContainer>
        <ThemeProvider theme={theme}>
          <CancelBtnWrapper
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            CANCEL
          </CancelBtnWrapper>
          <FinishBtnWrapper
            variant="contained"
            color="primary"
            onClick={handleFinish}
          >
            FINISH
          </FinishBtnWrapper>
        </ThemeProvider>
      </ButtonContainer>
    </StIssueModal>
  );
};

export default IssueModal;

const StIssueModal = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  align-content: flex-start;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding-top: 3rem;
`;

const TitleTypo = styled(Typography)`
  margin-bottom: 2rem;
  font-family: sans-serif;
  font-size: 2.2rem;
  font-weight: 550;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  width: 100%;
`;

const InputFormControl = styled(FormControl)`
  margin-bottom: 1.5rem;
`;

const InputWrapper = styled(TextField)`
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${COLOR.MAIN_PURPLE};
  }
`;

const ObjectP = styled.p`
  padding-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
