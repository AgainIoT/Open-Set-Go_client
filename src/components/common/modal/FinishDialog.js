import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Box, Button, DialogContent, DialogTitle } from "@mui/material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import axios from "axios";
import {
  repoDataAtomFamily,
  selectGitignoreData,
} from "../../../recoil/repoData";
import { templateContent } from "../../../recoil/templateState";
import { issueSelectedState } from "../../../recoil/issueState";
import { modalState } from "../../../recoil/commonState";
import { LoadingCompleted } from "../LoadingCompleted";

export const FinishDialog = (props) => {
  const [loading, setLoading] = useState(false);
  const owner = useRecoilValue(repoDataAtomFamily("owner"));
  const repoName = useRecoilValue(repoDataAtomFamily("repoName"));
  const desc = useRecoilValue(repoDataAtomFamily("desc"));
  const lang = useRecoilValue(repoDataAtomFamily("lang"));
  const framework = useRecoilValue(repoDataAtomFamily("framework"));
  const gitignoreData = useRecoilValue(selectGitignoreData);
  const license = useRecoilValue(repoDataAtomFamily("license"));
  const pr = useRecoilValue(templateContent("pr"));
  const contributing = useRecoilValue(templateContent("contributing"));
  const issue = useRecoilValue(issueSelectedState("issue"));
  const readme = useRecoilValue(templateContent("readme"));

  const [dialogValue, setDialogValue] = useRecoilState(modalState(props.type));

  async function checkDuplication() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/repo/checkDuplication`,
        {
          owner,
          repoName,
        },
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (e) {
      return false;
    }
  }

  // POST - repo info for create repository
  async function postCreatRepo() {
    try {
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
      alert("Failed Repository info post ");
    }
  }

  // POST - file for settings
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
          IssueTemplate: issue,
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
      alert("Failed File post");
    }
  }

  // POST - email
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
        window.location.replace("/");
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      alert("Failed to send email");
    }
  }

  const handlePost = async () => {
    const isUnique = await checkDuplication();

    if (isUnique) {
      setLoading(true);
      await postCreatRepo();
      await postRepoData();
      await postEmail();
      setDialogValue(false);
    } else {
      alert(
        `Your repository '${owner}/${repoName}' is already exists!\nPlease delete repository and try again!`,
      );
    }
  };

  const handleClose = () => {
    setDialogValue(false);
  };

  return (
    <StFinishDialog>
      {loading ? <LoadingCompleted /> : null}
      <Icon />
      <DialogTitleText>Are you sure?</DialogTitleText>
      <DialogContentText>completed project settings</DialogContentText>
      <DialogBtnContainer>
        <DialogBtn
          variant="contained"
          onClick={() => handlePost()}
          autoFocus
          disableElevation
          bhcolor={COLOR.MAIN_BLUE}
        >
          complete!
        </DialogBtn>
        <DialogBtn
          variant="outlined"
          onClick={handleClose}
          bhcolor={COLOR.MAIN_WHITE}
        >
          Cancel
        </DialogBtn>
      </DialogBtnContainer>
    </StFinishDialog>
  );
};

const StFinishDialog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Icon = styled(TaskAltRoundedIcon)`
  color: ${COLOR.MAIN_BLUE};
  font-size: 7rem;
`;

const DialogTitleText = styled(DialogTitle)`
  font-size: 2rem;
  font-weight: 600;
`;

const DialogContentText = styled(DialogContent)`
  color: ${COLOR.BORDER_GRAY};
  font-size: 1.5rem;
`;

const DialogBtnContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;
`;

const DialogBtn = styled(Button)`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 2rem;
  background-color: ${(props) => props.bgcolor};
  font-size: 1.5rem;
`;
