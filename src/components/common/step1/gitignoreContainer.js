import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import {
  repoDataAtomFamily,
  selectGitignoreData,
  selectFrameworkData,
  selectLanguageData,
} from "../../../recoil/repoData";

import { Button, Typography } from "@mui/material";
import { ReadonlyAutocomplete } from "../Autocomplete";
import { BaseModal } from "../modal/BaseModal";
import { GitignoreModal } from "../modal/gitignoreModal";
import { gitignoreOpenState } from "../../../recoil/openModal";
import { SearchAutoForm } from "../SearchAuto";
import { FrameWorkOptions } from "../../../data/CreateRepoData";

export const GitIgnoreContainer = () => {
  const [modalValue, setModalValue] = useRecoilState(gitignoreOpenState);
  const frameworkData = useRecoilValue(selectFrameworkData);

  const [test, setTest] = useRecoilState(repoDataAtomFamily("A"));
  const [test2, setTest2] = useRecoilState(repoDataAtomFamily("B"));

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
      <ReadonlyAutocomplete />
      {/* <SearchAutoForm data={FrameWorkOptions} type={selectGitignoreData} /> */}
      <BaseModal type={gitignoreOpenState}>
        <GitignoreModal />
      </BaseModal>
    </StGitIgnoreContainer>
  );
};

const StGitIgnoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  border: 0.1rem solid ${COLOR.MAIN_BLUE};
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
