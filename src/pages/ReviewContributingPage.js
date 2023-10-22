import { styled } from "styled-components";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { eachStepState, activeState } from "../recoil/commonState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";

function ReviewContributingPage(props) {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("5"));
  const [activeStep, setActiveStep] = useRecoilState(activeState);

  useEffect(() => {
    setStepComplted(true);
    setActiveStep(5);
  }, []);

  return (
    <StReviewContributingPage>
      <BaseModal type={"contributing"}>
        <TemplateModal type={"contributing"} />
      </BaseModal>
      <MarkdownPreview type={"contributing"} />
    </StReviewContributingPage>
  );
}

const StReviewContributingPage = styled.div`
  width: 100%;
  height: 100%;
  min-width: 60rem;
  min-height: 40rem;
`;

export default ReviewContributingPage;
