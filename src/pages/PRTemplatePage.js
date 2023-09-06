import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent } from "../recoil/templateState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { eachStepState, modalState } from "../recoil/commonState";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { TemplateModal } from "../components/common/modal/templateModal";

function PRTemplatePage() {
  const [modalValue, setModalValue] = useRecoilState(modalState("pr"));
  const [content, setContent] = useRecoilState(templateContent("pr"));

  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("3"));

  useEffect(() => {
    setStepComplted(true);
  }, []);

  const handleOpen = () => setModalValue(true);

  return (
    <div>
      <BaseModal type={"pr"}>
        <TemplateModal type={"pr"} />
      </BaseModal>
      <MarkdownPreview type={"pr"} />
      {/* <MDEditor height={350} value={content} onChange={setContent} /> */}
      <Button onClick={handleOpen} variant="contained" color="success">
        Modal
      </Button>
    </div>
  );
}

export default PRTemplatePage;
