import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  CircularProgress,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { ReactComponent as GitForkIcon } from "../../assets/icons/gitFork.svg";
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg";
import { reviewRepoDataState } from "../../recoil/reviewState";
import axios from "axios";

export const SecondInfo = () => {
  const selectedOwner = useRecoilValue(reviewRepoDataState("owner"));
  const selectedRepo = useRecoilValue(reviewRepoDataState("repoName"));

  const [selectedRepoData, setSelectedRepoData] = useState({
    repoURL: "",
    description: null,
    language: null,
    star: 0,
    fork: 0,
  });

  async function getUserRepoData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/repo/getRepoDetails`,
        {
          owner: selectedOwner,
          repoName: selectedRepo,
        },
        {
          withCredentials: true,
        },
      );
      console.log("init: %o", response.data);

      const initUserData = {
        repoURL: response.data.repoURL,
        description: response.data.description,
        language: response.data.language,
        star: response.data.star,
        fork: response.data.fork,
      };

      console.log("init2: %o", initUserData);
      //setOwner(response.data.id);
      setSelectedRepoData(initUserData);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getUserRepoData();
  }, []);

  const handleOpenRepo = () => {
    console.log("link:", selectedRepoData.repoURL);
    window.open(selectedRepoData.repoURL, "_blank");
  };

  return (
    <StFirstInfo>
      <Title variant="h3">Review Report</Title>
      <div>
        <SubTitle variant="h4">{selectedRepo}</SubTitle>
        <OwnerText>{selectedOwner}</OwnerText>
      </div>

      <DetailRepoDataContainer>
        <RepoItemWrapper>
          <GitIcon component={GitForkIcon} />
          <RepoDataText>Fork {selectedRepoData.fork}</RepoDataText>
        </RepoItemWrapper>
        <RepoItemWrapper>
          <GitIcon component={StarRateRoundedIcon} />
          <RepoDataText>Starred {selectedRepoData.star}</RepoDataText>
        </RepoItemWrapper>
        <IconButton
          onClick={() => {
            handleOpenRepo();
          }}
        >
          <GitHubIcon />
        </IconButton>
      </DetailRepoDataContainer>
      <SummarySection>
        <SummaryItem>
          <ItemProgress variant="determinate" value={75} />
          <ItemIcon
            component={CheckRoundedIcon}
            iconcolor={COLOR.MAIN_GREEN}
            inheritViewBox
          />
        </SummaryItem>
        <SummaryItem>
          <ItemIcon
            component={CheckRoundedIcon}
            iconcolor={COLOR.MAIN_GREEN}
            inheritViewBox
          />
        </SummaryItem>
      </SummarySection>
    </StFirstInfo>
  );
};

const StFirstInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background-color: ${COLOR.MAIN_WHITE}; */
`;
const Title = styled(Typography)`
  color: ${COLOR.MAIN_NAVY};
  font-weight: bold;
  font-size: 2rem;
`;
const SubTitle = styled(Typography)`
  color: ${COLOR.MAIN_BLACK};
  font-weight: bold;
  font-size: 3.8rem;
`;

const OwnerText = styled(Typography)`
  color: ${COLOR.FONT_GRAY};
  font-size: 2rem;
`;

const DetailRepoDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
const RepoItemWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
`;
const GitIcon = styled(SvgIcon)`
  color: ${COLOR.BORDER_GRAY};
  font-size: 3rem;
`;
const RepoDataText = styled(Typography)`
  color: ${COLOR.BORDER_GRAY};
  font-size: 2rem;
`;
const SummarySection = styled.div`
  width: 100%;
  height: 20%;
  background-color: ${COLOR.MAIN_HOVER};
  border-radius: 2rem;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  gap: 2rem;
`;

const ItemProgress = styled(CircularProgress)`
  display: flex;
  width: 7rem;
  height: 7rem;
  &.MuiCircularProgress-root {
    width: 7rem;
    height: 7rem;
    size: 5rem;
  }
  .MuiCircularProgress-svg {
    width: 5rem;
    height: 5rem;
  }
`;
const ItemIcon = styled(SvgIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 3.5rem;
  color: ${(props) => props.iconcolor};
`;
const ItemText = styled(Typography)`
  font-size: 1.8rem;
`;
