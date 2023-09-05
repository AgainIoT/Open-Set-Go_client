import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useEffect, useState } from "react";
import { LimitShowSelectChip, SelectChip } from "../SelectChip";
import { FrameWorkOptions } from "../../../data/CreateRepoData";

import optionData from "../../../data/optionData.json";

import {
  selectGitignoreData,
  showAllGitignoreState,
} from "../../../recoil/repoData";
import { FixedOptionShowSelect } from "../ShowSelect";
import { Grid } from "@mui/material";
import { SearchForm } from "../SearchAuto";

export const GitignoreModal = () => {
  const osOptions = optionData["OS"];
  const ideOptions = optionData["IDE"];
  const etcOptions = optionData["Etc."];
  const allOptions = Object.values(optionData).flatMap((itemArray) =>
    itemArray.map((item) => item.option),
  );
  return (
    <StGitIgnoreModal container>
      <Grid item xs={6}>
        <SearchForm data={allOptions} type={selectGitignoreData} />
        <FixedOptionShowSelect
          fixedOption1={FrameWorkOptions}
          type={selectGitignoreData}
        />
      </Grid>
      <Grid item xs={12} sm={6}></Grid>
      <Grid item xs={12} sm={6}>
        <SelectChip
          data={ideOptions}
          chipLabel="IDE"
          type={selectGitignoreData}
          limit={2}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectChip
          data={osOptions}
          chipLabel="OS"
          type={selectGitignoreData}
          limit={3}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectChip
          data={etcOptions}
          chipLabel="Etc."
          type={selectGitignoreData}
          limit={5}
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
