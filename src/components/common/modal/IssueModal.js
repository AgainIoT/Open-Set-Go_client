import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import React, { useState, useMemo, useEffect } from "react";
import { useRecoilState,useRecoilValue } from "recoil";
import { modalState } from "../../../recoil/commonState";
import {
  issueSelectedState,
  selectedState,
  clickState
} from "../../../recoil/issueState";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const IssueModal = () => {
  const [isDu, setIsDu] = useState(false);
  const [clickNow, setClickNow] = useRecoilState(clickState);
  const [modalValue, setModalValue] = useRecoilState(modalState("issue"));
  const [isFinished, setIsFinished] = useState(false);
  const [body, setBody] = useRecoilState(selectedState("body"));
  const [types, setTypes] = useRecoilState(issueSelectedState("type"));
  const [temType, setTemType] = useRecoilState(selectedState("type"));
  const [temTitle, setTemTitle] = useRecoilState(selectedState("title"));
  const [selectedInfo, setSelectedInfo] = useRecoilState(
    issueSelectedState("issue"),
  );

  const [selectedInfo22, setSelectedInfo22] = useRecoilState(issueSelectedState("typeAndTitle"));
  const [selectedInfo33, setSelectedInfo33] = useRecoilState(issueSelectedState("uname"));

  const [userInput, setUserInput] = useState({
    uname: "",
    desc: "",
    title: "",
  });

  const handleClose = () => {
    setModalValue(false);
    setUserInput({
      uname: "",
      desc: "",
      title: "",
    });
  };

  const handleChangeState = (e) => {
    setIsDu(false);
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  function isDuplicated () {
    if (selectedInfo33.includes(userInput.uname)){
      return true;
    }
    return false;
  }

  useEffect(() => {
    const hey = isDuplicated();
    setIsDu(hey);
    console.log(`isDu: ${hey}`);
    if (
      !hey &&
      userInput.uname.length > 2 &&
      userInput.desc.length > 2 &&
      !userInput.uname.includes("\"") &&
      !userInput.desc.includes("\"") &&
      !userInput.title.includes("\"")
    ) {
      setIsFinished(true);
      console.log("isFinished: true");
    } else {
      setIsFinished(false);
      console.log("isFInished: false");
    }
  }, [userInput.uname, userInput.desc, userInput.title]);

  const handleFinish = (e) => {
    let tmp = "";
    if(userInput.title === ""){
      tmp =
      `---
name: "${userInput.uname}"
description: "${userInput.desc}"
labels: []
assignees: []\n
` ;
    } else {
      tmp =
      `---
name: "${userInput.uname}"
description: "${userInput.desc}"
title: "${userInput.title}"
labels: []
assignees: []\n
` ;
    }
    const rst = tmp + body;
    setSelectedInfo22([
      ...selectedInfo22,
      {
        type: temTitle,
        uname: userInput.uname,
      }
    ]);
    setSelectedInfo33([...selectedInfo33, userInput.uname]);
    setSelectedInfo([
      ...selectedInfo,
      {
        type: temTitle,
        content: rst,
      },
    ]);
    setUserInput({
      uname: "",
      desc: "",
      title: "",
    });
    setModalValue(false);
    setTypes([...types, temType[0]]);
    setClickNow(false);
  };

  const NameFormHelperText = () => {
    const helperText = useMemo(() => {
      if (userInput.uname.length < 3) {
        return "Name must have at least 3 characters.";
      }
      if (userInput.uname.includes("\"")) {
        return "doublequote cannot be used.";
      }
      if (isDu) {
        return "The name is already used.";
      }
      return " ";
    }, [userInput.uname]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  const DescFormHelperText = () => {
    const helperText = useMemo(() => {
      if (userInput.desc.length < 3) {
        return "Description must have at least 3 characters.";
      }
      if (userInput.desc.includes("\"")) {
        return "doublequote cannot be used";
      }
      return " ";
    }, [userInput.desc]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  const TitleFormHelperText = () => {
    const helperText = useMemo(() => {
      if (userInput.title.includes("\"")) {
        return "doublequote cannot be used";
      }
      return " ";
    }, [userInput.desc]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  return (
    <StIssueModal>
      <ThemeProvider theme={theme}>
        {/* <button onClick={haha}>click</button> */}
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
          <TitleFormHelperText/>
        </InputDiv>
        <ButtonContainer>
          <BtnWrapper
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            CANCEL
          </BtnWrapper>
          {isFinished ? (
            <BtnWrapper
              variant="contained"
              color="primary"
              onClick={handleFinish}
            >
              FINISH
            </BtnWrapper>
          ) : (
            <BtnWrapper
              variant="contained"
              color="primary"
              onClick={handleFinish}
              disabled
            >
              FINISH
            </BtnWrapper>
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
  padding-top: 1rem;
  font-family: sans-serif;
  font-size: 2.2rem;
  font-weight: 550;
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
  padding-bottom: 1rem;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const InputWrapper = styled(OutlinedInput)`
  height: fit-content;
  font-size: 1.5rem;
  border: 0.1rem solid black;
  border-radius: 1rem;
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

const BtnWrapper = styled(Button)`
  ${SharedBtn}
`;

const theme = createTheme({
  palette: {
    primary: { main: COLOR.MAIN_PURPLE },
  },
});

