import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import MDEditor from "@uiw/react-md-editor";
import { templateContent, templateState } from "../../recoil/templateState";

// props -> type(pr, readme, contributing)
const MarkdownPreview = (props) => {
  const [contentValue, setContentValue] = useRecoilState(
    templateContent(props.type),
  );

  return (
    <StMarkdownPreview>
      <MDEditor
        height={"100%"}
        value={contentValue}
        onChange={setContentValue}
      />
    </StMarkdownPreview>
  );
};

const StMarkdownPreview = styled.div`
  height: 100%;
`;

export default MarkdownPreview;
