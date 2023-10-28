import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { BaseModal } from "../components/common/modal/BaseModal";
import { activeState, eachStepState, modalState } from "../recoil/commonState";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import { styled } from "styled-components";
import { reviewRepoDataState } from "../recoil/reviewState";
import { useNavigate } from "react-router-dom";
import { checkTokenValid } from "../layout/Header";

function ReviewPRTemplatePage() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("3"));
  const [activeStep, setActiveStep] = useRecoilState(activeState);
  const owner = useRecoilValue(reviewRepoDataState("owner"));
  const repoName = useRecoilValue(reviewRepoDataState("repoName"));

  const navigate = useNavigate();

  useEffect(() => {
    setStepComplted(true);
    setActiveStep(3);
    if (!(owner && repoName)) {
      navigate("/");
    }
    checkTokenValid().then((result) => {
      console.log(result);
      if (!result) navigate("/");
    });
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
