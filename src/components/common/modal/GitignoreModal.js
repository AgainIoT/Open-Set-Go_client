import styled from "styled-components";

import { SelectChip } from "../SelectChip";

import optionData from "../../../data/optionData.json";

import { selectGitignoreData } from "../../../recoil/repoData";
import { FixedOptionShowSelect } from "../ShowSelect";
import { Grid } from "@mui/material";
import { SearchAuto } from "../SearchAuto";

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
        <SearchAuto data={allOptions} type={selectGitignoreData} />
        <ShowContainer>
          <FixedOptionShowSelect type={selectGitignoreData} />
        </ShowContainer>
      </Grid>

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
          data={etcOptions}
          chipLabel="Etc."
          type={selectGitignoreData}
          limit={5}
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
    </StGitIgnoreModal>
  );
};

const StGitIgnoreModal = styled(Grid)`
  padding: 1rem;
  width: 100%;
  height: 100%;
  row-gap: 1rem;
  overflow-y: hidden;
`;

const ShowContainer = styled.div`
  padding-left: 1rem;
`;