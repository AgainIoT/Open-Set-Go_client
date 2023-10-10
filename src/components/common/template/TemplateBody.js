import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import {
  templateContent,
  templatePreviewState,
  templateState,
  templateToModal,
} from "../../../recoil/templateState";
import MarkdownPreview from "@uiw/react-markdown-preview";


// props -> type(pr, readme, contributing)
export default function TemplateBody(props) {
  const showValue = useRecoilValue(templatePreviewState(props.type));

  return (
    <BodyBox>
      <Typography
        id="PR-desc"
        variant="h4"
        gutterBottom
        color="textSecondary"
        m={4}
      >
        <MarkdownPreview source={showValue.content} />
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
