import styled from "styled-components";
import { COLOR } from "../styles/color";
import React, { useEffect } from "react";
import IssueList from "../components/common/IssueList";

function IssueTemplatePage() {
  return (
    <StIssueTemplatePage>
      {/* <TmpDiv1>
        <IssueList type={"issue"} />
      </TmpDiv1> */}
      <IssueList type={"issue"}/>
      <Tmpdiv />
    </StIssueTemplatePage>
  );
}

const StIssueTemplatePage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const Tmpdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid red;
`;

export default IssueTemplatePage;
