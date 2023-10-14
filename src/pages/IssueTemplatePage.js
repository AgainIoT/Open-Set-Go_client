import styled from "styled-components";
import { COLOR } from "../styles/color";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateContent } from "../recoil/templateState";
import { BaseModal3 } from "../components/common/modal/BaseModal3";
import { eachStepState, modalState } from "../recoil/commonState";
import IssueList from "../components/common/IssueList";
import IssueModal from "../components/common/modal/IssueModal";

function IssueTemplatePage() {
  const [modalValue, setModalValue] = useRecoilState(modalState("issue"));
  const [content, setContent] = useRecoilState(templateContent("issue"));


  const handleOpen = () => setModalValue(true);
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
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export default IssueTemplatePage;
