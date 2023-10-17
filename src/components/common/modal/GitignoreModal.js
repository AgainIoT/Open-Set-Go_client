import styled from "styled-components";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { SelectChip } from "../SelectChip";
import { selectGitignoreData } from "../../../recoil/repoData";
import { FixedOptionShowSelect } from "../ShowSelect";
import { SearchAuto } from "../SearchAuto";
import axios from "axios";

export const GitignoreModal = () => {
  const [osOptions, setOsOptions] = useState([]);
  const [ideOptions, setIdeOptions] = useState([]);
  const [etcOptions, setEtcOptions] = useState([]);
  const [allOptions, setAllOptions] = useState([]);

  const bindData = async (rawData) => {
    const data = rawData.map((value, idx) => ({
      id: idx,
      option: value,
    }));
    return data;
  };

  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/file/gitignore`,
    );
    const data = result.data[0];
    console.log(data);
    setOsOptions(await bindData(data.OS));
    setIdeOptions(await bindData(data.IDE));
    setEtcOptions(await bindData(data.ETC));
    setAllOptions(
      Object.values(data).flatMap((arr) => arr.map((item) => item)),
    );
  };

  useEffect(() => {
    getData();
  }, []);

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
  width: 100%;
  height: 100%;
  padding: 1rem;
  row-gap: 1rem;
  overflow-y: hidden;
`;

const ShowContainer = styled.div`
  padding-left: 1rem;
`;
