import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useEffect, useState } from "react";
import { LimitShowSelectChip, SelectChip } from "../SelectChip";
import { FrameWorkOptions } from "../../../data/CreateRepoData";

import optionData from "../../../data/optionData.json";

import {
  repoDataAtomFamily,
  selectGitignoreData,
  showAllGitignoreState,
} from "../../../recoil/repoData";
import { FixedOptionShowSelect } from "../ShowSelect";
import { Button, Grid } from "@mui/material";
import { SearchForm } from "../SearchAuto";
import axios from "axios";
import { useRecoilValue } from "recoil";

export const FinishModal = () => {
  const owner = useRecoilValue(repoDataAtomFamily("owner"));
  const repoName = useRecoilValue(repoDataAtomFamily("repoName"));
  const desc = useRecoilValue(repoDataAtomFamily("desc"));
  const lang = useRecoilValue(repoDataAtomFamily("lang"));
  const framework = useRecoilValue(repoDataAtomFamily("framework"));
  const gitignoreData = useRecoilValue(selectGitignoreData);

  /* POST - info */

  async function postCreatRepo() {
    // async, await을 사용하는 경우

    try {
      // GET 요청은 params에 실어 보냄
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/repo`,
        {
          owner: owner,
          repoName: repoName,
          description: desc,
        },
        {
          withCredentials: true,
        },
      );
      // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.
    } catch (e) {
      // 실패 시 처리
      console.error(e);
      alert("기록 시작 실패. 재시도해주세요.");
    }
  }

  /* POST - file */

  async function postRepoData() {
    // async, await을 사용하는 경우

    try {
      // GET 요청은 params에 실어 보냄

      console.log({
        owner: owner,
        repoName: repoName,
        language: lang,
        framework: framework,
        gitignore: gitignoreData,
        PRTemplate: "### markdown",
        IssueTemplate: [], // empty array required now
        contributingMd: "### contributing.md",
        readmeMd: "### readme.md",
        license: "https://www.gnu.org/licenses/gpl-3.0.txt",
      });
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/file`,
        {
          owner: owner,
          repoName: repoName,
          language: lang,
          framework: framework,
          gitignore: gitignoreData,
          PRTemplate: "### markdown",
          IssueTemplate: [], // empty array required now
          contributingMd: "### contributing.md",
          readmeMd: "### readme.md",
          license: "https://www.gnu.org/licenses/gpl-3.0.txt",
        },
        {
          withCredentials: true,
        },
      );
      // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.
    } catch (e) {
      // 실패 시 처리
      console.error(e);
      alert("기록 시작 실패. 재시도해주세요.");
    }
  }

  const handlePost = async () => {
    await postCreatRepo();
    await postRepoData();
  };

  return (
    <StGitIgnoreModal container>
      <Grid item xs={6}>
        <Button variant="text" onClick={() => handlePost()}>
          Finish
        </Button>
      </Grid>
    </StGitIgnoreModal>
  );
};

const StGitIgnoreModal = styled(Grid)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
