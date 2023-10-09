import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "@mui/material/Button";
import { templateContent } from "../recoil/templateState";
import { eachStepState, modalState } from "../recoil/commonState";
import { BaseModal } from "../components/common/modal/BaseModal";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { TemplateModal } from "../components/common/modal/templateModal";
import MDEditor from "@uiw/react-md-editor";


function PRTemplatePage() {
  const [modalValue, setModalValue] = useRecoilState(modalState("pr"));
  const [content, setContent] = useRecoilState(templateContent("pr"));

  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("3"));

  useEffect(() => {
    setStepComplted(true);
  }, []);

  const handleOpen = () => setModalValue(true);

  return (
    <StReadmeTemplatePage>
      <BaseModal type={"pr"}>
        <TemplateModal type={"pr"} />
      </BaseModal>
      <MarkdownPreview type={"pr"} />
    </StReadmeTemplatePage>
  );
}

const StReadmeTemplatePage = styled.div`
  width: 100%;
  height: 100%;
`;

export default PRTemplatePage;
