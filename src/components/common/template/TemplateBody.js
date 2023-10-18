import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { templatePreviewState } from "../../../recoil/templateState";
import Typography from "@mui/material/Typography";
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
      <Typography
        id="PR-desc"
        variant="h4"
        gutterBottom
        color="textSecondary"
        m={4}
      >
        <MarkdownPreview
          source={rawData.map((obj) => obj["content"]).join("\n")}
        />
      </Typography>
    </BodyBox>
  );
}

const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 52rem;
  max-width: 65rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
