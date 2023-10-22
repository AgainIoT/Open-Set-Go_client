import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent } from "../recoil/templateState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { eachStepState, modalState } from "../recoil/commonState";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import { styled } from "styled-components";

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
  min-width: 60rem;
  min-height: 40rem;
`;

export default PRTemplatePage;
