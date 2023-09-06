import React, { useState, useEffect } from "react";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent, templateState } from "../../recoil/templateState";

const MarkdownPreview = (props) => {
  const [contentValue, setContentValue] = useRecoilState(
    templateContent(props.type),
  );

  return (
    <div>
      <MDEditor height={350} value={contentValue} onChange={setContentValue} />
    </div>
  );
};

export default MarkdownPreview;
