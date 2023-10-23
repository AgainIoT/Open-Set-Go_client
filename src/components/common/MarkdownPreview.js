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
        height={"100%"}
        value={contentValue}
        onChange={setContentValue}
      />
    </StMarkdownPreview>
  );
};

const StMarkdownPreview = styled.div`
  height: 60vh;
`;

export default MarkdownPreview;
