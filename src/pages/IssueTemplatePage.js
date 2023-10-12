import styled from "styled-components";
import { COLOR } from "../styles/color";
import React, { useEffect } from "react";
import IssueList from "../components/common/IssueList";
function IssueTemplatePage() {
  return (
    <StIssueTemplatePage>
      <IssueList />
      {/* <Tmpdiv><IssueBody/></Tmpdiv> */}
    </StIssueTemplatePage>
  );
}

const StIssueTemplatePage = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export default IssueTemplatePage;
