import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { eachStepState, modalState } from "../recoil/commonState";
import { templateContent } from "../recoil/templateState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";

function ReadmeTemplatePage() {
  const [modalValue, setModalValue] = useRecoilState(modalState("readme"));
  const [content, setContent] = useRecoilState(templateContent("readme"));
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("6"));

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
  min-width: 60rem;
  min-height: 40rem;
`;

export default ReadmeTemplatePage;
