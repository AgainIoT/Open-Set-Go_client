import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { reviewRepoDataState } from "../../recoil/reviewState";
import { SelectAuto2 } from "./SelectAuto2";
import { SelectRepoName } from "./SelectRepoName";

export const FirstContents = () => {
  // GET - user repo info
  const [selectOwner, setSelectOwner] = useRecoilState(
    reviewRepoDataState("owner"),
  );
  const [selectRepoName, setSelectRepoName] = useRecoilState(
    reviewRepoDataState("repoName"),
  );
  const [page, setPage] = useRecoilState(reviewRepoDataState("page"));

  const [userRepoData, setUserRepoData] = useState([
    {
      owner: "",
      avatar: "",
      repoName: [],
    },
  ]);
  const [isSelectOwner, setIsSelectOwner] = useState(false);
  const [repoNameOptions, setRepoNameOptions] = useState([]);

  async function getUserRepoData() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/repo/getPulbicRepo`,
        {
          withCredentials: true,
        },
      );

      const initUserData = response.data.map((it) => {
        return {
          owner: it.owner,
          avatar: it.avatar,
          repoName: it.repoName,
        };
      });
      setUserRepoData(initUserData);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getUserRepoData();
  }, []);

  //Apply options based on the owner of choice
  useEffect(() => {
    if (isSelectOwner) {
      const selectedRepoData = userRepoData.find(
        (it) => it.owner === selectOwner,
      );
      const repoNameData = selectedRepoData.repoName || [];

      setRepoNameOptions(repoNameData);
    } else {
      setSelectRepoName("");
    }
  }, [selectOwner]);

  return (
    <StFirstContents>
      <Title variant="h3">Select your Repository</Title>
      <SelectAuto2
        labelText={"Owner"}
        type={"owner"}
        data={userRepoData}
        dataState={reviewRepoDataState}
        setIsSelectOwner={setIsSelectOwner}
      />
      <SelectRepoName
        labelText={"Repository Name"}
        type={"repoName"}
        data={repoNameOptions}
        dataState={reviewRepoDataState}
        isSelectOwner={isSelectOwner}
      />
      <BtnWrapper>
        <StartButton
          variant="outlined"
          onClick={() => {
            setPage(1);
          }}
        >
          Start review
        </StartButton>
      </BtnWrapper>
    </StFirstContents>
  );
};

const StFirstContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 7rem;
  gap: 5rem;
  border: 1px solid black;
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: ${COLOR.MAIN_NAVY};
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid purple;
`;
const StartButton = styled(Button)`
  width: 70%;
  height: 50%;
  font-size: 2rem;
`;
