import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { templateState, templateToModal } from "../../../recoil/templateState";
import { useRecoilState } from "recoil";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { styled } from "styled-components";

const BodyBox = styled.div`
  display: flex;
  max-height: 52rem;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default function TemplateBody(props) {
  const [data, setData] = useState([]);
  const [selectValue, setSelectValue] = useRecoilState(templateState);
  const [modal, setModal] = useRecoilState(templateToModal);

  return (
    <BodyBox>
      <Typography
        id="PR-desc"
        variant="h4"
        gutterBottom
        color="textSecondary"
        m={2}
      >
        <MarkdownPreview source={selectValue} />
      </Typography>
    </BodyBox>
  );
}
