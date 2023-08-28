import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useEffect, useState } from "react";
import { SelectChip } from "../SelectChip";
import { FrameWorkOptions } from "../../../data/CreateRepoData";

import { selectGitignoreData } from "../../../recoil/repoData";
import { FixedOptionShowSelect } from "../ShowSelect";
import { Grid } from "@mui/material";

export const GitignoreModal = () => {
  return (
    <StGitIgnoreModal container>
      <Grid item xs={12} sm={6}>
        <FixedOptionShowSelect
          fixedOption1={FrameWorkOptions}
          type={selectGitignoreData}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectChip
          data={FrameWorkOptions}
          chipLabel="IDE"
          type={selectGitignoreData}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectChip
          data={FrameWorkOptions}
          chipLabel="Etc."
          type={selectGitignoreData}
        />
      </Grid>
    </StGitIgnoreModal>
  );
};

const StGitIgnoreModal = styled(Grid)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
