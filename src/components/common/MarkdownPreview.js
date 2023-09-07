import React, { useState, useEffect } from "react";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent, templateState } from "../../recoil/templateState";
import { styled } from "styled-components";

// props -> type(pr, readme, contributing)
const MarkdownPreview = (props) => {
  const [contentValue, setContentValue] = useRecoilState(
    templateContent(props.type),
  );

  return (
    <StMarkdownPreview>
      <MDEditor height={"95%"} value={contentValue} onChange={setContentValue} />
    </StMarkdownPreview>
  );
};

const StMarkdownPreview = styled.div`
height: 90%;  
width: 100%;
`;

export default MarkdownPreview;
