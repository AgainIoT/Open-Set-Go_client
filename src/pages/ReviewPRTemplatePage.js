import React, {  useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { BaseModal } from "../components/common/modal/BaseModal";
import { activeState, eachStepState, modalState } from "../recoil/commonState";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import { styled } from "styled-components";
import { ReviewLayout } from "../layout/ReviewLayout";

function ReviewPRTemplatePage() {
  const [modalValue, setModalValue] = useRecoilState(modalState("pr"));

  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("3"));
  const [activeStep, setActiveStep] = useRecoilState(activeState);

  useEffect(() => {
    setStepComplted(true);
    setActiveStep(3);
  }, []);

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

export default ReviewPRTemplatePage;
