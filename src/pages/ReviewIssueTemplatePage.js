import styled from "styled-components";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { BaseModal3 } from "../components/common/modal/BaseModal3";
import { eachStepState, modalState, activeState } from "../recoil/commonState";
import IssueList from "../components/common/IssueList";
import IssueModal from "../components/common/modal/IssueModal";
function ReviewIssueTemplatePage() {
  const [modalValue, setModalValue] = useRecoilState(modalState("issue"));
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("4"));
  const [activeStep, setActiveStep] = useRecoilState(activeState);

  useEffect(() => {
    setStepComplted(true);
    setActiveStep(4);
  }, []);

  return (
    <StIssueTemplatePage>
      <BaseModal3 type={"issue"}>
        <IssueModal type={"issue"} />
      </BaseModal3>
      <IssueList />
    </StIssueTemplatePage>
  );
}

const StIssueTemplatePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 100%;
`;

export default ReviewIssueTemplatePage;
