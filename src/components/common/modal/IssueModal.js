import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { modalState } from "../../../recoil/commonState";
// import { selectedState } from "../../../recoil/issueState";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField, Typography } from "@mui/material";
import React, { useState} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const IssueModal = () => {
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
    console.log(`userInput: ${userInput.uname}`);
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
          <InputWrapper name="uname" value={userInput.uname} onChange={handleChangeState}/>
        </InputFormControl>
        <ObjectP>description</ObjectP>
        <InputFormControl variant="outlined">
          <InputWrapper name="desc" value={userInput.desc} onChange={handleChangeState}/>
        </InputFormControl>
        <ObjectP>title</ObjectP>
        <InputFormControl variant="outlined">
          <InputWrapper name="title" value={userInput.title} onChange={handleChangeState}/>
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
  /* border: 1px solid red; */
`;

const TitleTypo = styled(Typography)`
  font-family: sans-serif;
  font-size: 2.2rem;
  font-weight: 550;
  margin-bottom: 2rem;
  /* border: 1px solid green; */
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  /* border: 1px solid blue; */
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
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* border: 1px solid pink; */
  padding-bottom: 1rem;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  /* border: 1px solid purple; */
`;

const SharedBtn = `
  font-size: 1.2rem;
  width: 8.5rem;
  height: 3.5rem;
  margin-top: 2rem;
  margin-left: 1rem;
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
