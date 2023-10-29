import{ styled } from "styled-components";
import { COLOR } from "../../styles/color.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { reviewRepoDataState } from "../../recoil/reviewState.js";
import { issueSelectedState, selectedState } from "../../recoil/issueState.js";
import {
  templateContent,
  templatePreviewState,
} from "../../recoil/templateState.js";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

export const SelectType = () => {
  const navigate = new useNavigate();
  const resetReviewPage = useResetRecoilState(reviewRepoDataState("page"));
  const resetReviewOwner = useResetRecoilState(reviewRepoDataState("owner"));
  const resetReviewRepo = useResetRecoilState(reviewRepoDataState("repoName"));


  useEffect(() => {
    resetReviewPage();
    resetReviewOwner();
    resetReviewRepo();
  }, []);

  return (
    <StSelectType>
      <Stack spacing={20} direction="row">
        <CreateBox {...useScrollFadeIn("up", 1.0, 0.2)}>
          <Stack spacing={2} direction="column">
            <div>
              <Title>Create New</Title>
              <Title>Open-Source Repository</Title>
            </div>
            <div>
              <SubTitle>Provides step-by-step help to create</SubTitle>
              <SubTitle>Open-Source Repository from scratch</SubTitle>
            </div>
            <div>
              <Explanation>Recommended for people who are new to</Explanation>
              <Explanation>creating Open Source repositories</Explanation>
            </div>
            <CreateBtn variant="contained" onClick={() => navigate("/step1")}>
              Choose
            </CreateBtn>
          </Stack>
        </CreateBox>
        <CheckBox {...useScrollFadeIn("up", 1.0, 0.4)}>
          <Stack spacing={2} direction="column">
            <div>
              <Title>Check existing</Title>
              <Title>Open-Source Repository</Title>
            </div>
            <div>
              <SubTitle>Checks that the existing repository</SubTitle>
              <SubTitle>is running well as Open-Source</SubTitle>
            </div>
            <div>
              <Explanation>Recommended for those who already run</Explanation>
              <Explanation>an open source repository</Explanation>
            </div>
            <CheckBtn variant="contained" onClick={() => navigate("/review")}>
              Choose
            </CheckBtn>
          </Stack>
        </CheckBox>
      </Stack>
    </StSelectType>
  );
};

const StSelectType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 78vh;
  background: linear-gradient(
    to bottom,
    ${COLOR.MAIN_HOVER},
    ${COLOR.MAIN_BACKGROUND}
  );
  text-align: center;
`;

const CreateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-width: 50rem;
  height: 100%;
  min-height: 35rem;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: white;
  text-align: center;
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-width: 50rem;
  height: 100%;
  min-height: 30rem;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_PURPLE};
  color: white;
  text-align: center;
`;

const CreateBtn = styled(Button)({
  width: "100%",
  minWidth: "20rem",
  height: "30%",
  minHeight: "5rem",
  borderRadius: "1rem",
  backgroundColor: `${COLOR.MAIN_PURPLE}`,
  "&:hover": {
    backgroundColor: `${COLOR.MAIN_PURPLE}`,
  },
  fontSize: "1.5rem",
});

const CheckBtn = styled(Button)({
  width: "100%",
  minWidth: "20rem",
  height: "30%",
  minHeight: "5rem",
  backgroundColor: "white",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "white",
  },
  color: "black",
  fontSize: "1.5rem",
});

export const Title = styled(Typography)`
  font-size: 3rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

export const SubTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: 00;
`;

export const Explanation = styled(Typography)`
  font-size: 1.3rem;
  font-weight: 00;
  color: ${COLOR.FONT_GRAY};
`;
