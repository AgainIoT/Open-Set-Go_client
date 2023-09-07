import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import Button from "@mui/material/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent, templateState } from "../recoil/templateState";

import { BaseModal } from "../components/common/modal/BaseModal";
import { eachStepState, modalState } from "../recoil/commonState";
import { TemplateModal } from "../components/common/modal/templateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";

import { styled } from "styled-components";

function ReadmeTemplatePage() {
  const [modalValue, setModalValue] = useRecoilState(modalState("readme"));
  const [content, setContent] = useRecoilState(templateContent("readme"));
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("5"));

  useEffect(() => {
    setStepComplted(true);
  }, []);

  const handleOpen = () => setModalValue(true);

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
