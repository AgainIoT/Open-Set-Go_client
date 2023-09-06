import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";

import { GitIgnoreContainer } from "../components/step1/gitignoreContainer";
import { SelectContainer } from "../components/step1/SelectContainer";

import { RequiredFieldContainer } from "../components/step1/RequiredFieldContainer";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeState, eachStepState } from "../recoil/commonState";
import { repoDataAtomFamily } from "../recoil/repoData";

function CreateRepo() {
  const [activeStep, setActiveStep] = useRecoilState(activeState);
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("1"));
  const validateCheck = useRecoilValue(repoDataAtomFamily("dupCheck"));
  const repoName = useRecoilValue(repoDataAtomFamily("repoName"));

  useEffect(() => {
    if (validateCheck && repoName !== "") {
      setStepComplted(true);
    } else {
      setStepComplted(false);
    }
  }, [validateCheck, repoName]);
  return (
    <>
      <StCreateRepo container>
        <RequiredFieldContainer />
        <Grid item xs={12}>
          <SelectContainer />
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
