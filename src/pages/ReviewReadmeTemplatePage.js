import { styled } from "styled-components";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { eachStepState, activeState } from "../recoil/commonState";
import { BaseModal } from "../components/common/modal/BaseModal";
import { TemplateModal } from "../components/common/modal/TemplateModal";
import MarkdownPreview from "../components/common/MarkdownPreview";
import { reviewRepoDataState } from "../recoil/reviewState";
import { useNavigate } from "react-router-dom";
import { checkTokenValid } from "../layout/Header";

function ReviewReadmeTemplatePage() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("6"));
  const [activeStep, setActiveStep] = useRecoilState(activeState);
  const owner = useRecoilValue(reviewRepoDataState("owner"));
  const repoName = useRecoilValue(reviewRepoDataState("repoName"));

  const navigate = useNavigate();

  useEffect(() => {
    setStepComplted(true);
    setActiveStep(6);
    console.log(owner, repoName);
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
