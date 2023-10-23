import { styled } from "styled-components";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { eachStepState, activeState } from "../recoil/commonState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { useNavigate } from "react-router-dom";
import { reviewRepoDataState } from "../recoil/reviewState";
import { checkTokenValid } from "../layout/Header";

function ReviewContributingTemplatePage() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("5"));
  const [activeStep, setActiveStep] = useRecoilState(activeState);
  const owner = useRecoilValue(reviewRepoDataState("owner"));
  const repoName = useRecoilValue(reviewRepoDataState("repoName"));

  const navigate = useNavigate();

  useEffect(() => {
    setStepComplted(true);
    setActiveStep(5);
    if (!(owner && repoName)) {
      navigate("/");
    }
    checkTokenValid().then((result) => {
      console.log(result);
      if (!result) navigate("/");
    });
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

export default ReviewContributingTemplatePage;
