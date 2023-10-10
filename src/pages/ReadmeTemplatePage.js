import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "@mui/material/Button";
import { templateContent, templateState } from "../recoil/templateState";
import { eachStepState, modalState } from "../recoil/commonState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/templateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";
import MDEditor from "@uiw/react-md-editor";


function ReadmeTemplatePage() {
  // const [modalValue, setModalValue] = useRecoilState(modalState("readme"));
  // const [content, setContent] = useRecoilState(templateContent("readme"));
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("5"));

  useEffect(() => {
    setStepComplted(true);
  }, []);

  // const handleOpen = () => setModalValue(true);

  return (
    <StReadmeTemplatePage>
      <BaseModal type={"readme"}>
        <TemplateModal type={"readme"} />
      </BaseModal>
      <MarkdownPreview type={"readme"} />
    </StReadmeTemplatePage>
  );
}

const StReadmeTemplatePage = styled.div`
  width: 100%;
  height: 100%;
`;

export default ReadmeTemplatePage;
