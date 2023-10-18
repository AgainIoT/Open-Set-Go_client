import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { Box, CircularProgress, SvgIcon, Typography } from "@mui/material";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {
  communityItem,
  securityItem,
  templateItem,
} from "../../data/ReviewItemData";
import { useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { reviewRepoDataState } from "../../recoil/reviewState";
import { useEffect } from "react";

export const SecondContents = () => {
  //   const ItemContainer = (props) => {
  //     return (
  //       <StItemContainer>
  //         <TitleContainer>
  //           <Title variant="h4">Category</Title>
  //         </TitleContainer>
  //         <ContentsContainer>
  //           <ItemBox>
  //             {/* <IconWrapper></IconWrapper> */}
  //             <IconBox component={category1[0].icon} inheritViewBox />
  //             <TextContainer>
  //               <ItemTitle variant="h4">issue template</ItemTitle>
  //               <DecsText variant="subtitle1">
  //                 contributors can select the appropriate template when they open
  //                 new issues in the repository
  //               </DecsText>
  //             </TextContainer>
  //           </ItemBox>
  //           <ItemBox>2</ItemBox>
  //           <ItemBox>3</ItemBox>
  //           <ItemBox>4</ItemBox>
  //         </ContentsContainer>
  //       </StItemContainer>
  //     );
  //   };
  const selectedOwner = useRecoilValue(reviewRepoDataState("owner"));
  const selectedRepo = useRecoilValue(reviewRepoDataState("repoName"));

  const [isLoadingTemplate, setIsLoadingTemplate] = useState(true);
  const [isLoadingSecurity, setIsLoadingSecurity] = useState(true);
  const [isLoadingCommunity, setIsLoadingCommunity] = useState(true);

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
    description: true,
    license: {
      exist: true,
      name: "",
    },
    conduct: true,
    discussion: true,
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
      console.log("init: %o", response.data);

      const initReviewData = {
        // pr: response.data.pr, // or false
        // issue: response.data.issue, // or false
        // contributing: response.data.contributing, // or false
        // readme: response.data.readme,
        ...response.data,
      };

      console.log("initReview: %o", initReviewData);
      //setOwner(response.data.id);
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
      console.log("init: %o", response.data);

      const initReviewData = {
        // codeql: response.data.codeql,
        // secretScan: response.data.secretScan,
        // securityPolicy: response.data.securityPolicy,
        // dependabot: response.data.dependabot,
        ...response.data,
      };

      console.log("initReview: %o", initReviewData);
      //setOwner(response.data.id);
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
      console.log("init: %o", response.data);

      const initReviewData = {
        // description: response.data.description,
        // license: response.data.license,
        // conduct: response.data,
        // discussion: true,
        ...response.data,
      };

      console.log("initReview: %o", initReviewData);
      //setOwner(response.data.id);
      setReviewCommunityData(initReviewData);
      setIsLoadingCommunity(false);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getTemplateReviewData();
    getSecurityReviewData();
    getCommunityReviewData();
  }, []);

  //   useEffect(()=>{if(!isLoadingTemplate){

  //   }},[isLoadingTemplate]);

  const ItemContainer = (props) => {
    return (
      <ItemBox>
        {/* <IconWrapper></IconWrapper> */}
        <IconBox component={props.icon} inheritViewBox />
        <TextContainer>
          <ItemTitle variant="h4">{props.item}</ItemTitle>
          <DecsText variant="subtitle1">{props.desc}</DecsText>
        </TextContainer>
      </ItemBox>
    );
  };

  const TemplateItemContainer = (props) => {
    const item = props.item;
    const status = !isLoadingTemplate && reviewTemplateData[item];
    const [ishover, setIsHover] = useState(false);

    return (
      <TemplateItemBox>
        {/* <IconWrapper></IconWrapper> */}
        <ItemIconBox>
          <TemplateIconBox
            component={status ? CheckRoundedIcon : props.icon}
            iconcolor={COLOR.MAIN_NAVY}
          />
          {isLoadingTemplate ? (
            <ItemProgress />
          ) : (
            <ItemProgress variant="determinate" value={100} />
          )}
        </ItemIconBox>

        <TextContainer>
          <ItemTitle variant="h4">{props.title}</ItemTitle>
          <DecsText variant="subtitle1">{props.desc}</DecsText>
        </TextContainer>
      </TemplateItemBox>
    );
  };

  const ItemListContainer = (props) => {
    return (
      <StItemListContainer>
        {props.category.map((it) => {
          return props.category === templateItem ? (
            <TemplateItemContainer
              key={it.item}
              item={it.item}
              title={it.title}
              icon={it.icon}
              desc={it.desc}
            />
          ) : (
            <ItemContainer
              key={it.item}
              item={it.item}
              icon={it.icon}
              desc={it.desc}
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
          <Title variant="h4">Category</Title>
        </TitleContainer>
        <ItemListContainer category={templateItem} />
      </div>
      <div>
        <TitleContainer>
          <Title variant="h4">Category</Title>
        </TitleContainer>
        <ItemListContainer category={securityItem} />
      </div>
      <div>
        <TitleContainer>
          <Title variant="h4">Category</Title>
        </TitleContainer>
        <ItemListContainer category={communityItem} />
      </div>
    </StSecondContents>
  );
};
const StSecondContents = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* justify-content: center; */
  flex-direction: column;
  width: 100%;
  height: 100%;

  padding: 5rem 2rem 0 2rem;
  gap: 6rem;

  overflow-y: auto;
`;

// const StItemContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-direction: column;
//   gap: 1rem;
// `;

const TitleContainer = styled.div``;
const Title = styled(Typography)``;

// const ContentsContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-direction: row;
// `;

// for security, community item
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 18rem;
  padding: 1.5rem;
  gap: 1rem;
  /* border: 0.1rem solid lightgrey; */
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
  box-shadow: 0rem 0.1rem 2rem lightgrey;
`;

const IconBox = styled(SvgIcon)`
  color: ${COLOR.MAIN_NAVY};
  font-size: 3.8rem;
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
const TemplateItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 18rem;
  padding: 1.5rem;
  gap: 1rem;
  /* border: 0.1rem solid lightgrey; */
  border-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
  box-shadow: 0rem 0.1rem 2rem lightgrey;
  transition: top 1s ease-in;
  &:hover {
    background-color: ${COLOR.MAIN_PURPLE};
    transition: all 0.3s ease;
  }
`;

const ItemIconBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0.1rem;
  width: 5rem;
  height: 5rem;
`;

// const TopContainer = styled.div`
//   display: flex;
//   /* justify-content: space-between; */
//   align-items: center;
//   flex-direction: row;
//   width: 100%;
//   gap: 2rem;
// `;

// const IconWrapper = styled.div`
//   width: 5rem;
//   height: 5rem;
//   border: 0.1rem solid ${COLOR.MAIN_NAVY};
//   border-radius: 10rem;
// `;

const TemplateIconBox = styled(SvgIcon)`
  color: ${(props) => props.iconcolor};
  position: absolute;
  font-size: 3.6rem;
  ${TemplateItemBox}:hover & {
    display: none;
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
  justify-content: space-around;
  flex-direction: row;
`;
