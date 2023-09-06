import styled from "styled-components";
import { COLOR } from "../../../styles/color";

import {
  repoDataAtomFamily,
  selectGitignoreData,
} from "../../../recoil/repoData";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { templateContent } from "../../../recoil/templateState";

export const FinishDialog = () => {
  const navigate = useNavigate();
  const owner = useRecoilValue(repoDataAtomFamily("owner"));
  const repoName = useRecoilValue(repoDataAtomFamily("repoName"));
  const desc = useRecoilValue(repoDataAtomFamily("desc"));
  const lang = useRecoilValue(repoDataAtomFamily("lang"));
  const framework = useRecoilValue(repoDataAtomFamily("framework"));
  const gitignoreData = useRecoilValue(selectGitignoreData);
  const license = useRecoilValue(repoDataAtomFamily("license"));
  const pr = useRecoilValue(templateContent("pr"));
  const contributing = useRecoilValue(templateContent("contributing"));
  const readme = useRecoilValue(templateContent("readme"));

  /* POST - info */
  async function postCreatRepo() {
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
    } catch (e) {
      console.error(e);
      alert("기록 시작 실패. 재시도해주세요.");
    }
  }

  /* POST - file */
  async function postRepoData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/file`,
        {
          owner: owner,
          repoName: repoName,
          language: lang,
          framework: framework,
          gitignore: gitignoreData,
          PRTemplate: pr,
          IssueTemplate: [], // empty array required now
          contributingMd: contributing,
          readmeMd: readme,
          license: license,
        },
        {
          withCredentials: true,
        },
      );
    } catch (e) {
      console.error(e);
      alert("기록 시작 실패. 재시도해주세요.");
    }
  }

  /* POST - email */
  async function postEmail() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/mail`,
        "",
        {
          withCredentials: true,
        },
      );
      if (response.status < 300) {
        navigate("/home");
      }
    } catch (e) {
      console.error(e);
      alert("기록 시작 실패. 재시도해주세요.");
    }
  }

  const handlePost = async () => {
    await postCreatRepo();
    await postRepoData();
    await postEmail();
  };

  const handleClose = () => {};

  return (
    <StFinishDialog>
      <DialogTitle>Are you sure completed project settings?</DialogTitle>
      <DialogContent>
        asdfasdffasdfasdfasdfasdfasdfasdfasdfasdfasdf?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={() => handlePost()} autoFocus>
          Finish
        </Button>
      </DialogActions>
    </StFinishDialog>
  );
};

const StFinishDialog = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
