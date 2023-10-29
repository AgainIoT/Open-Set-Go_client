import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  Box,
  Button,
  CircularProgress,
  SvgIcon,
  Typography,
} from "@mui/material";
//import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import axios from "axios";
import {
  communityItem,
  securityItem,
  templateItem,
} from "../../data/ReviewItemData";
import {
  reivewAlertListState,
  reivewReportState,
  reviewRepoDataState,
} from "../../recoil/reviewState";
import { ReactComponent as Arrow } from "../../assets/icons/arrowLongRight.svg";
import { issueSelectedState, selectedState } from "../../recoil/issueState";
import {
  templateContent,
  templatePreviewState,
} from "../../recoil/templateState";
import { ReviewTemplateList } from "./ReviewItems";
import { ReviewList } from "./reviewItem/OtherItem";

export const SecondContents = () => {
  const navigate = new useNavigate();

  const [selectedOwner, setSelectedOwner] = useRecoilState(
    reviewRepoDataState("owner"),
  );
  const [selectedRepo, setSelectedRepo] = useRecoilState(
    reviewRepoDataState("repoName"),
  );
  const [page, setPage] = useRecoilState(reviewRepoDataState("page"));
  const [alertList, setAlertList] = useRecoilState(reivewAlertListState);
  const [checkList, setCheckList] = useRecoilState(
    reivewReportState("checked"),
  );
  const [noneList, setNoneList] = useRecoilState(reivewReportState("none"));
  const [hasNotified, setHasNotified] = useRecoilState(
    reivewReportState("hasNotified"),
  );

  const [isLoadingTemplate, setIsLoadingTemplate] = useState(true);
  const [isLoadingSecurity, setIsLoadingSecurity] = useState(true);
  const [isLoadingCommunity, setIsLoadingCommunity] = useState(true);
  //State key needs to be changed later
  const resetReviewIssue1 = useResetRecoilState(selectedState("body"));
  const resetReviewIssue2 = useResetRecoilState(selectedState("type"));
  const resetReviewIssue3 = useResetRecoilState(selectedState("title"));

  const resetReviewIssueChip1 = useResetRecoilState(
    issueSelectedState("issue"),
  );
  const resetReviewIssueChip2 = useResetRecoilState(issueSelectedState("type"));
  const resetReviewIssueChip3 = useResetRecoilState(
    issueSelectedState("typeAndTitle"),
  );
  const resetReviewIssueChip4 = useResetRecoilState(
    issueSelectedState("uname"),
  );

  const resetReviewReadme = useResetRecoilState(templateContent("readme"));
  const resetReviewContributing = useResetRecoilState(
    templateContent("contributing"),
  );
  const resetReviewPr = useResetRecoilState(templateContent("pr"));
  const resetReviewReadmePreview = useResetRecoilState(
    templatePreviewState("readme"),
  );
  const resetReviewContributingPreview = useResetRecoilState(
    templatePreviewState("contributing"),
  );
  const resetReviewPrPreview = useResetRecoilState(templatePreviewState("pr"));

  const [reviewTemplateData, setReviewTemplateData] = useState({
    pr: false,
    issue: false,
    contributing: false,
    readme: false,
  });
  const [reviewSecurityData, setReviewSecurityData] = useState({
    codeql: false,
    secretScan: false,
    securityPolicy: false,
    dependabot: false,
  });
  const [reviewCommunityData, setReviewCommunityData] = useState({
    description: false,
    license: {
      exist: false,
      name: "",
    },
    conduct: false,
    discussion: false,
  });

  async function getTemplateReviewData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/review/template`,
        {
          owner: selectedOwner,
          repoName: selectedRepo,
        },
        {
          withCredentials: true,
        },
      );

      const initReviewData = {
        ...response.data,
      };

      setReviewTemplateData(initReviewData);
      setIsLoadingTemplate(false);
    } catch (e) {
      console.error(e);
    }
  }
  async function getSecurityReviewData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/review/security`,
        {
          owner: selectedOwner,
          repoName: selectedRepo,
        },
        {
          withCredentials: true,
        },
      );

      const initReviewData = {
        ...response.data,
      };

      const nullValue = Object.keys(response.data).filter(
        (key) => response.data[key] === null,
      );

      setAlertList(nullValue);

      setReviewSecurityData(initReviewData);
      setIsLoadingSecurity(false);
    } catch (e) {
      console.error(e);
    }
  }
  async function getCommunityReviewData() {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/review/community`,
        {
          owner: selectedOwner,
          repoName: selectedRepo,
        },
        {
          withCredentials: true,
        },
      );

      const initReviewData = {
        description: response.data.description,
        license: response.data.license.exist,
        conduct: response.data.conduct,
        discussion: response.data.discussion,
      };

      setReviewCommunityData(initReviewData);
      setIsLoadingCommunity(false);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setHasNotified(false);
    getTemplateReviewData();
    getSecurityReviewData();
    getCommunityReviewData();
  }, []);

  useEffect(() => {
    resetReviewIssue1();
    resetReviewIssue2();
    resetReviewIssue3();
    resetReviewIssueChip1();
    resetReviewIssueChip2();
    resetReviewIssueChip3();
    resetReviewIssueChip4();
    resetReviewReadme();
    resetReviewContributing();
    resetReviewPr();
    resetReviewReadmePreview();
    resetReviewContributingPreview();
    resetReviewPrPreview();
  }, []);

  useEffect(() => {
    if (!isLoadingTemplate && !isLoadingSecurity && !isLoadingCommunity) {
      const arr = {
        ...reviewTemplateData,
        ...reviewSecurityData,
        ...reviewCommunityData,
      };

      const checkValue = Object.keys(arr).filter((key) => arr[key] === true);
      const noneCheckValue = Object.keys(arr).filter(
        (key) => arr[key] === false,
      );
      setCheckList(checkValue);
      setNoneList(noneCheckValue);

      if (alertList.length > 0 || noneCheckValue.length > 0) {
        setHasNotified(true);
      }
    }
  }, [isLoadingTemplate, isLoadingSecurity, isLoadingCommunity]);

  const handleFinish = () => {
    setPage(0);
    setSelectedOwner("");
    setSelectedRepo("");
    navigate("/");
  };

  return (
    <StSecondContents>
      <div>
        <TitleContainer>
          <Title variant="h4">about Template</Title>
        </TitleContainer>
        <ReviewTemplateList
          data={templateItem}
          isLoadingTemplate={isLoadingTemplate}
          reviewData={reviewTemplateData}
        />
      </div>
      <div>
        <TitleContainer>
          <Title variant="h4">about Security</Title>
        </TitleContainer>
        <ReviewList
          data={securityItem}
          isLoading={isLoadingSecurity}
          reviewData={reviewSecurityData}
        />
      </div>
      <div>
        <TitleContainer>
          <Title variant="h4">about Community</Title>
        </TitleContainer>
        <ReviewList
          data={communityItem}
          isLoading={isLoadingCommunity}
          reviewData={reviewCommunityData}
        />
      </div>
      <CloseBtn
        variant="outlined"
        onClick={() => {
          handleFinish();
        }}
      >
        Close
      </CloseBtn>
    </StSecondContents>
  );
};
const StSecondContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 4rem 4rem 0 4rem;
  gap: 5rem;
  overflow-y: auto;
`;

const TitleContainer = styled.div``;
const Title = styled(Typography)`
  padding-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
`;

const CloseBtn = styled(Button)`
  font-size: 2rem;
`;
