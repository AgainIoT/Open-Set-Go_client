import styled from "styled-components";
//import { COLOR } from "../styles/color";
//import { useEffect, useState } from "react";
import {
  selectGitignoreData,
  selectFrameworkData,
  selectLanguageData,
} from "../recoil/repoData";

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

import { GitIgnoreContainer } from "../components/common/step1/gitignoreContainer";

function CreateRepo() {
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
          <p>Great repository names are short and memorable.</p>
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
        <Grid item xs={12}></Grid>
        <Grid item xs={8}>
          <GitIgnoreContainer />
        </Grid>
      </StCreateRepo>
    </>
  );
}
export default CreateRepo;

const StCreateRepo = styled(Grid)`
  width: 100%;
  height: 100%;
  gap: 0.8rem;
`;

const Subtitle = styled(Typography)``;
