import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Box, Button, DialogContent, DialogTitle } from "@mui/material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import axios from "axios";
import { repoDataAtomFamily } from "../../../recoil/repoData";
import { templateContent } from "../../../recoil/templateState";
import { issueSelectedState } from "../../../recoil/issueState";
import { modalState, activeState } from "../../../recoil/commonState";
import { LoadingCompleted } from "../LoadingCompleted";
import { useNavigate } from "react-router-dom";
import { reviewRepoDataState } from "../../../recoil/reviewState";

export const ReviewDialog = (props) => {
  const [loading, setLoading] = useState(false);
  const owner = useRecoilValue(reviewRepoDataState("owner"));
  const repoName = useRecoilValue(reviewRepoDataState("repoName"));
  const pr = useRecoilValue(templateContent("pr"));
  const contributing = useRecoilValue(templateContent("contributing"));
  const issues = useRecoilValue(issueSelectedState("issue"));
  const readme = useRecoilValue(templateContent("readme"));

  const [dialogValue, setDialogValue] = useRecoilState(modalState(props.type));
  const navigate = new useNavigate();
  const [activeStep, setActiveStep] = useRecoilState(activeState);

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

  // POST - PRTemplate data
  async function postPRData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/review/file/pr`,
        {
          owner: owner,
          repoName: repoName,
          content: pr,
        },
        {
          withCredentials: true,
        },
      );
    } catch (e) {
      console.error(e);
      alert("Failed pr post");
    }
  }

  // POST - issue data
  async function postIssueData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/review/file/issue`,
        {
          owner: owner,
          repoName: repoName,
          issues: issues.map((issue) => {
            return {
              category: issue.type,
              content: issue.content,
            };
          }),
        },
        {
          withCredentials: true,
        },
      );
    } catch (e) {
      console.error(e);
      alert("Failed issue post");
    }
  }

  // POST - contributing data
  async function postContributingData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/review/file/contributing`,
        {
          owner: owner,
          repoName: repoName,
          content: contributing,
        },
        {
          withCredentials: true,
        },
      );
    } catch (e) {
      console.error(e);
      alert("Failed contributing post");
    }
  }

  // POST - readme data
  async function postReadmeData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/review/file/readme`,
        {
          owner: owner,
          repoName: repoName,
          content: readme,
        },
        {
          withCredentials: true,
        },
      );
    } catch (e) {
      console.error(e);
      alert("Failed readme post");
    }
  }

  const handlePost = async () => {
    setLoading(true);
    switch (activeStep) {
      case 3:
        await postPRData();
        break;
      case 4:
        await postIssueData();
        break;
      case 5:
        await postContributingData();
        break;
      case 6:
        await postReadmeData();
    }
    setDialogValue(false);
    setActiveStep(1);
    navigate("/review", { replace: true });
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
