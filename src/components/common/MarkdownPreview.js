import { styled } from "styled-components";
import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { useRecoilState } from "recoil";
import { templateContent } from "../../recoil/templateState";

// props -> type(pr, readme, contributing)
const MarkdownPreview = (props) => {
  const [contentValue, setContentValue] = useRecoilState(
    templateContent(props.type),
  );

  return (
    <StMarkdownPreview>
      <MDEditor
        height={"60vh"}
        value={contentValue}
        onChange={setContentValue}
      />
    </StMarkdownPreview>
  );
};

const StMarkdownPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export default MarkdownPreview;
