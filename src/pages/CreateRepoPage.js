import styled from "styled-components";
//import { COLOR } from "../styles/color";
//import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectGitignoreData,
  selectFrameworkData,
  selectLanguageData,
} from "../recoil/repoData";
import { gitignoreOpenState } from "../recoil/openModal";

import {
  SelectInputContainer,
  TextInputContainer,
} from "../components/common/InputComponent";

import { FrameWorkOptions } from "../data/CreateRepoData";
import {
  AutocompleteInput,
  ReadonlyAutocomplete,
} from "../components/common/Autocomplete";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { BaseModal } from "../components/common/modal/BaseModal";
import { ChipGroup, SelectChip } from "../components/common/SelectChip";
import { GitignoreModal } from "../components/common/modal/gitignoreModal";

function CreateRepo() {
  // Modal Test
  const [modalValue, setModalValue] = useRecoilState(gitignoreOpenState);
  const handleOpen = () => setModalValue(true);

  return (
    <>
      <StCreateRepo container>
        <Grid item xs={12} sm={2}>
          <SelectInputContainer labelText={"Owner"} />
        </Grid>
        <Grid item xs={5}>
          <TextInputContainer labelText={"Repository Name"} fieldType={1} />
        </Grid>
        <Grid item xs={12}>
          <TextInputContainer labelText={"Description"} fieldType={5} />
        </Grid>
        <Grid item xs={12}>
          <Subtitle>Select your project Language/Select</Subtitle>
        </Grid>

        <Grid item xs={12} sm={4}>
          <AutocompleteInput
            useOption={FrameWorkOptions}
            labelText={"Search Language"}
            recoilType={selectLanguageData}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <AutocompleteInput
            useOption={FrameWorkOptions}
            labelText={"Search FrameWork"}
            recoilType={selectFrameworkData}
          />
        </Grid>
        <Grid item xs={12}>
          <Subtitle>Add .gitignore</Subtitle>
          <p>Choose which files not to track from a list of templates.</p>
        </Grid>
        <Grid item xs={8}>
          <ReadonlyAutocomplete />
        </Grid>
        <Grid item>
          <Button onClick={handleOpen}>Edit .gitignore template</Button>
        </Grid>

        <BaseModal type={gitignoreOpenState}>
          <GitignoreModal />
        </BaseModal>
      </StCreateRepo>
    </>
  );
}
export default CreateRepo;

const StCreateRepo = styled(Grid)`
  width: 100%;
  height: 100%;
  gap: 0.5rem;
`;

const Subtitle = styled(Typography)``;
