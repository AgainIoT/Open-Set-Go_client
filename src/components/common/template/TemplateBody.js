import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import {
  templateContent,
  templatePreviewState,
  templateState,
  templateToModal,
} from "../../../recoil/templateState";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { WidthFull } from "@mui/icons-material";
import MarkdownPreview from "@uiw/react-markdown-preview";

const BodyBox = styled.div`
  display: flex;
  max-height: 52rem;
  max-width: 75rem;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

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
        m={2}
      >
        <MarkdownPreview source={showValue.content} />
      </Typography>
    </BodyBox>
  );
}
