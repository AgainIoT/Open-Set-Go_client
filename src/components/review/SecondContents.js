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
import { ReviewTemplateItems, ReviewTemplateList } from "./ReviewItems";

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

  const ItemContainer = (props) => {
    console.log("category", props.category);
    const isLoading =
      props.category === "securityItem"
        ? isLoadingSecurity
        : isLoadingCommunity;
    const reviewData =
      props.category === "securityItem"
        ? reviewSecurityData
        : reviewCommunityData;

    const ItemIcon = {
      true: (
        <TemplateIconBox
          component={CheckRoundedIcon}
          iconcolor={COLOR.MAIN_NAVY}
        />
      ),
      false: (
        <TemplateIconBox component={props.icon} iconcolor={COLOR.MAIN_ROSE} />
      ),
      null: (
        <TemplateIconBox
          component={WarningAmberOutlinedIcon}
          iconcolor={COLOR.MAIN_ORANGE}
        />
      ),
    };

    return (
      <ItemBox>
        <ItemIconBox>
          {isLoading ? (
            <TemplateIconBox
              component={props.icon}
              iconcolor={COLOR.MAIN_NAVY}
            />
          ) : (
            ItemIcon[reviewData[props.item]]
          )}
          {isLoading ? (
            <ItemProgress />
          ) : (
            <ItemProgress variant="determinate" value={100} />
          )}
        </ItemIconBox>
        <TextContainer>
          <ItemTitle variant="h4">{props.title}</ItemTitle>
          <DecsText variant="subtitle1">{props.desc}</DecsText>
        </TextContainer>
      </ItemBox>
    );
  };

  const TemplateItemContainer = (props) => {
    const item = props.item;
    const status = !isLoadingTemplate && reviewTemplateData[item];
    // const [ishover, setIsHover] = useState(false);

    return (
      <TemplateItemBox
        onClick={() => {
          navigate(props.path);
        }}
      >
        <TemplateItemIconBox>
          {isLoadingTemplate ? (
            <TemplateIconBox
              component={props.icon}
              iconcolor={COLOR.MAIN_NAVY}
            />
          ) : (
            <TemplateIconBox
              component={status ? CheckRoundedIcon : props.icon}
              iconcolor={COLOR.MAIN_NAVY}
            />
          )}
          {isLoadingTemplate ? (
            <ItemProgress />
          ) : (
            <ItemProgress variant="determinate" value={100} />
          )}
        </TemplateItemIconBox>
        <TextContainer>
          <TemplateItemTitle variant="h4">{props.title}</TemplateItemTitle>
          <TemplateDecsText variant="subtitle1">{props.desc}</TemplateDecsText>
        </TextContainer>
        <ArrowIcon component={Arrow} inheritViewBox />
      </TemplateItemBox>
    );
  };

  const ItemListContainer = (props) => {
    return (
      <StItemListContainer>
        {props.data.map((it) => {
          return props.data === templateItem ? (
            // <TemplateItemContainer
            //   key={it.item}
            //   item={it.item}
            //   title={it.title}
            //   icon={it.icon}
            //   desc={it.desc}
            //   path={it.path}
            // />
            <ReviewTemplateItems
              key={it.item}
              item={it.item}
              title={it.title}
              icon={it.icon}
              desc={it.desc}
              path={it.path}
              isLoadingTemplate={isLoadingTemplate}
              reviewData={reviewTemplateData}
            />
          ) : (
            <ItemContainer
              key={it.item}
              item={it.item}
              title={it.title}
              icon={it.icon}
              desc={it.desc}
              category={props.category}
            />
          );
        })}
      </StItemListContainer>
    );
  };

  return (
    <StSecondContents>
      <div>
        <TitleContainer>
          <Title variant="h4">about Template</Title>
        </TitleContainer>
        {/* <ItemListContainer data={templateItem} category={"templateItem"} /> */}
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
        <ItemListContainer data={securityItem} category={"securityItem"} />
      </div>
      <div>
        <TitleContainer>
          <Title variant="h4">about Community</Title>
        </TitleContainer>
        <ItemListContainer data={communityItem} category={"communityItem"} />
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

// for security, community item
const ItemBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 23rem;
  height: 22rem;
  padding: 1.5rem;
  /* gap: 1rem; */
  /* border: 0.1rem solid lightgrey; */
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
  box-shadow: 0rem 0.1rem 2rem lightgrey;
`;

const ItemIconBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  width: 5rem;
  height: 5rem;
  margin: 0.1rem;
`;

const IconBox = styled(SvgIcon)`
  position: absolute;
  color: ${(props) => props.iconcolor};
  font-size: 2.7rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemTitle = styled(Typography)`
  font-weight: bolder;
  text-align: left;
`;
const DecsText = styled(Typography)`
  color: ${COLOR.FONT_GRAY};
  font-size: 1.2rem;
  text-align: justify;
`;

// for template item
const TemplateItemBox = styled(ItemBox)`
  &:hover {
    padding: 2rem 1.5rem;
    background-color: ${COLOR.MAIN_PURPLE};
    transition: all 0.3s ease-in;
  }
`;

const TemplateItemIconBox = styled(ItemIconBox)`
  transition: all 1s ease-in-out;
  ${TemplateItemBox}:hover & {
    display: none;
    transition: all 0.5s ease-in-out;
  }
`;

const TemplateIconBox = styled(IconBox)``;

const TemplateItemTitle = styled(ItemTitle)`
  ${TemplateItemBox}:hover & {
    color: ${COLOR.MAIN_WHITE};
    transition: all 0.2s ease-in-out;
  }
`;
const TemplateDecsText = styled(DecsText)`
  ${TemplateItemBox}:hover & {
    color: ${COLOR.MAIN_WHITE};
    transition: all 0.2s ease-in-out;
  }
`;

const ArrowIcon = styled(SvgIcon)`
  display: none;
  color: ${COLOR.MAIN_WHITE};
  font-size: 5rem;
  ${TemplateItemBox}:hover & {
    display: block;
    color: ${COLOR.MAIN_WHITE};
    transition: all 0.2s ease-in-out;
  }
`;

const ItemProgress = styled(CircularProgress)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.MAIN_SKYBLUE};

  .MuiCircularProgress-svg {
    width: 5rem;
    height: 5rem;
  }
`;

// for item list
const StItemListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const CloseBtn = styled(Button)`
  font-size: 2rem;
`;
