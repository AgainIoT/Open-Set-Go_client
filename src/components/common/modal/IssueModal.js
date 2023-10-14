import styled from "styled-components";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

const IssueModal = () => {
  return (
    <StIssueModal align="left">
      <TitleTypo variant="h3">Create a Issue template</TitleTypo>
      <InputDiv>
        <ObjectP>name</ObjectP>
        <FormControl sx={{width: "20rem" }} variant="outlined">
          <OutlinedInput />
        </FormControl>
        <ObjectP variant="subtitle1">description</ObjectP>
        <FormControl sx={{ width: "20rem" }} variant="outlined">
          <OutlinedInput />
        </FormControl>
        <ObjectP variant="subtitle1">title</ObjectP>
        <FormControl sx={{ width: "20rem" }} variant="outlined">
          <OutlinedInput />
        </FormControl>
      </InputDiv>
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
  width: 80%;
  height: 100%;
  padding-top: 5rem;
  border: 1px solid red;
`;

const TitleTypo = styled(Typography)`
font-family: sans-serif;
  font-size: 2.2rem;
  font-weight: 550;
  border: 1px solid green;
`;
const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  border: 1px solid blue;
`;
const ObjectP = styled.p`
  font-size: 1.2rem;
  border: 1px solid pink;
  text-transform: capitalize;
  font-weight: 600;
  font-family: sans-serif;
  `;
