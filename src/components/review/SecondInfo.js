import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import {
  Alert,
  AlertTitle,
  CircularProgress,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { ReactComponent as GitForkIcon } from "../../assets/icons/gitFork.svg";
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg";
import {
  reivewAlertListState,
  reviewRepoDataState,
} from "../../recoil/reviewState";
import axios from "axios";
import { ReviewChart } from "./ReviewChart";

export const SecondInfo = () => {
  const selectedOwner = useRecoilValue(reviewRepoDataState("owner"));
  const selectedRepo = useRecoilValue(reviewRepoDataState("repoName"));
  const alertList = useRecoilValue(reivewAlertListState);

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

  const NotificationItem = (props) => {
    console.log("item::", props.item);
    return (
      <StNotificationItem>
        <NotificationItemWrapper severity="warning">
          <NotificationItemTitle>
            Unable to confirm about {props.item}
          </NotificationItemTitle>
          Authority above the owner are required for accurately evaluated.
        </NotificationItemWrapper>
      </StNotificationItem>
    );
  };

  const NotificationList = () => {
    console.log("alertList", alertList);

    return (
      <StNotificationList>
        {alertList.map((it, index) => {
          console.log("list Item:", it);
          return <NotificationItem key={it} item={it} />;
        })}
      </StNotificationList>
    );
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
      <ReportContainer>
        {" "}
        <SummarySection>
          {/* <SummaryItem>
            <ItemProgress variant="determinate" value={75} size="15rem" />
          </SummaryItem> */}
          <ItemText>Summary</ItemText>
          <ReviewChart />
        </SummarySection>
        <NotificationSection>
          <ItemText>Notification</ItemText>
          <NotificationList />
        </NotificationSection>
      </ReportContainer>
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
const ReportContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  gap: 2rem;
  /* height: 30%; */
`;
const SummarySection = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 20rem;
  padding: 2rem 1rem;
  background-color: ${COLOR.MAIN_HOVER};
  border-radius: 1.5rem;
`;
const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0.1rem;
  width: 10rem;
  height: 10rem;
`;

const ItemProgress = styled(CircularProgress)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 9rem;

  color: ${COLOR.MAIN_SKYBLUE};
  span {
    width: 9rem;
    height: 9rem;
  }

  &.MuiCircularProgress-determinate {
    width: 9rem;
    height: 9rem;
  }

  &.MuiCircularProgress-root {
    width: 9rem;
    height: 9rem;
  }

  &.MuiCircularProgress-svg {
    width: 9rem;
    height: 9rem;
  }
`;

const ItemText = styled(Typography)`
  font-size: 1.8rem;
`;

const NotificationSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 15rem;
  padding: 2rem 1rem;
  gap: 2rem;
  background-color: ${COLOR.MAIN_WHITE};

  border-radius: 1.5rem;
`;

const StNotificationItem = styled.div`
  display: flex;
  width: 100%;
`;

const NotificationItemWrapper = styled(Alert)`
  display: flex;
  width: 100%;
  background-color: ${COLOR.MAIN_WHITE};
  font-size: 1.2rem;
`;
const NotificationItemTitle = styled(AlertTitle)`
  font-size: 1.5rem;
`;
const StNotificationList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
