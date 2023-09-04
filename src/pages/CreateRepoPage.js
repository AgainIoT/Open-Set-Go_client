import styled from "styled-components";
//import { COLOR } from "../styles/color";
//import { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material";

import { GitIgnoreContainer } from "../components/step1/gitignoreContainer";
import { SelectContainer } from "../components/step1/SelectContainer";

import { RequiredFieldContainer } from "../components/step1/RequiredFieldContainer";

function CreateRepo() {
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
