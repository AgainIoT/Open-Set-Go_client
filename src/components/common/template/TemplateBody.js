import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { templatePreviewState } from "../../../recoil/templateState";
import MarkdownPreview from "@uiw/react-markdown-preview";

// props -> type(pr, readme, contributing)
export default function TemplateBody(props) {
  const rawData = useRecoilValue(templatePreviewState(props.type));
  const [previewData, setPreviewData] = useState("");
  useEffect(() => {
    const tmp = rawData.map((obj) => obj["content"]).join("\n");
    setPreviewData(tmp);
  }, [rawData]);

  return (
    <BodyBox>
      {rawData.length ? (
        <MarkdownPreview
          source={rawData.map((obj) => obj["content"]).join("\n")}
          style={{ maxHeight: "52rem", maxWidth: "65rem", margin: "auto" }}
        />
      ) : null}
    </BodyBox>
  );
}

const BodyBox = styled.div`
  display: flex,
  justify-content: center,
  align-items: center,
  height: 100%,
  overflow-x: hidden;
  overflow-y: auto;
`;
