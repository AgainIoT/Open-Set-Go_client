import { styled } from "styled-components";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { eachStepState, activeState } from "../recoil/commonState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";

function ReviewReadmeTemplatePage() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("6"));
  const [activeStep, setActiveStep] = useRecoilState(activeState);

  useEffect(() => {
    setStepComplted(true);
    setActiveStep(6);
  }, []);

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

export default ReviewReadmeTemplatePage;
