import styled from "styled-components";
import { COLOR } from "../../styles/color";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  repoDataAtomFamily,
  showAllGitignoreState,
} from "../../recoil/repoData";

import { Button, Typography } from "@mui/material";
import { BaseModal } from "../common/modal/BaseModal";
import { GitignoreModal } from "../common/modal/GitignoreModal";
import { ReadonlyAuto } from "../common/ReadOnlyAuto";
import { modalState } from "../../recoil/commonState";
import { BaseModal2 } from "../common/modal/BaseModal2";

/* for gitignore */
export const GitIgnoreContainer = () => {
  const [modalValue, setModalValue] = useRecoilState(
    modalState("gitignoreModal"),
  );
  const langData = useRecoilValue(repoDataAtomFamily("lang"));
  const frameworkData = useRecoilValue(repoDataAtomFamily("framework"));

  const handleOpen = () => setModalValue(true);
  return (
    <StGitIgnoreContainer>
      <Header>
        <TitleText>Setting .gitignore</TitleText>
        <Button onClick={handleOpen}>Edit .gitignore</Button>
      </Header>
      <BodyText variant="body1">
        Choose which files not to track from a list of templates.
      </BodyText>
      <ReadonlyAuto
        data={showAllGitignoreState}
        fixedData={[langData, frameworkData]}
      />
      <BaseModal2 type={"gitignoreModal"}>
        <GitignoreModal />
      </BaseModal2>
    </StGitIgnoreContainer>
  );
};

const StGitIgnoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1rem 2rem;
  gap: 0.8rem;
  border: 0.1rem solid ${COLOR.BORDER_GRAY};
  border-radius: 2rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SharedTextStyle = `
font-size:1.2rem;
`;

const TitleText = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
`;
const BodyText = styled(Typography)`
  ${SharedTextStyle}
`;
