import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, SvgIcon, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { ReactComponent as Arrow } from "../../assets/icons/arrowLongRight.svg";

export const ReviewTemplateList = (props) => {
  const ReviewTemplateItem = (props) => {
    const data = props.data;
    const navigate = new useNavigate();

    const ItemIcon = {
      default: (
        <>
          <TemplateIconWrapper />
          <ItemProgress progresscolor={COLOR.MAIN_SKYBLUE} />
        </>
      ),
      true: (
        <>
          <TemplateIconWrapper
            component={CheckRoundedIcon}
            iconcolor={COLOR.MAIN_NAVY}
          />
          <ItemProgress
            variant="determinate"
            value={100}
            progresscolor={COLOR.MAIN_SKYBLUE}
          />
        </>
      ),
      false: (
        <>
          <TemplateIconWrapper
            component={data.icon}
            iconcolor={COLOR.MAIN_NAVY}
          />
          <ItemProgress
            variant="determinate"
            value={100}
            progresscolor={COLOR.MAIN_ROSE}
          />
        </>
      ),
    };

    return (
      <StTemplateItemBox
        onClick={() => {
          navigate(data.path);
        }}
      >
        <TemplateItemIconBox>
          {props.isLoadingTemplate
            ? ItemIcon["default"]
            : ItemIcon[props.reviewData[data.item]]}
        </TemplateItemIconBox>
        <TextContainer>
          <TemplateItemTitle variant="h4">{data.title}</TemplateItemTitle>
          <TemplateDecsText variant="subtitle1">{data.desc}</TemplateDecsText>
        </TextContainer>
        <ArrowIcon component={Arrow} inheritViewBox />
      </StTemplateItemBox>
    );
  };

  return (
    <StReviewList>
      {props.data.map((it) => {
        return (
          <ReviewTemplateItem
            key={it.item}
            data={it}
            isLoadingTemplate={props.isLoadingTemplate}
            reviewData={props.reviewData}
          />
        );
      })}
    </StReviewList>
  );
};

export const ReviewSecurityItems = (props) => {
  return <StReviewItems></StReviewItems>;
};

export const ReviewCommunityItems = (props) => {
  const ItemIcon = {
    default: (
      <>
        <IconWrapper />
        <ItemProgress progresscolor={COLOR.MAIN_SKYBLUE} />
      </>
    ),
    true: (
      <>
        <IconWrapper component={CheckRoundedIcon} iconcolor={COLOR.MAIN_NAVY} />
        <ItemProgress
          variant="determinate"
          value={100}
          progresscolor={COLOR.MAIN_SKYBLUE}
        />
      </>
    ),
    false: (
      <>
        <IconWrapper component={props.icon} iconcolor={COLOR.MAIN_NAVY} />
        <ItemProgress
          variant="determinate"
          value={100}
          progresscolor={COLOR.MAIN_ROSE}
        />
      </>
    ),
  };
  return (
    <StItemBox>
      <ItemIconBox>
        {props.isLoadingCommunity
          ? ItemIcon["default"]
          : ItemIcon[props.reviewData[props.item]]}
      </ItemIconBox>
      <TextContainer>
        <ItemTitle variant="h4">{props.title}</ItemTitle>
        <DecsText variant="subtitle1">{props.desc}</DecsText>
      </TextContainer>
    </StItemBox>
  );
};

const StReviewList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const StReviewItems = styled.div``;

//default
const StItemBox = styled.div`
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

const IconWrapper = styled(SvgIcon)`
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

// for template
const StTemplateItemBox = styled(StItemBox)`
  &:hover {
    padding: 2rem 1.5rem;
    background-color: ${COLOR.MAIN_PURPLE};
    transition: all 0.3s ease-in;
  }
`;

const TemplateItemIconBox = styled(ItemIconBox)`
  transition: all 1s ease-in-out;
  ${StTemplateItemBox}:hover & {
    display: none;
    transition: all 0.5s ease-in-out;
  }
`;

const TemplateIconWrapper = styled(IconWrapper)``;

const TemplateItemTitle = styled(ItemTitle)`
  ${StTemplateItemBox}:hover & {
    color: ${COLOR.MAIN_WHITE};
    transition: all 0.2s ease-in-out;
  }
`;
const TemplateDecsText = styled(DecsText)`
  ${StTemplateItemBox}:hover & {
    color: ${COLOR.MAIN_WHITE};
    transition: all 0.2s ease-in-out;
  }
`;

const ArrowIcon = styled(SvgIcon)`
  display: none;
  color: ${COLOR.MAIN_WHITE};
  font-size: 5rem;
  ${StTemplateItemBox}:hover & {
    display: block;
    color: ${COLOR.MAIN_WHITE};
    transition: all 0.2s ease-in-out;
  }
`;

const ItemProgress = styled(CircularProgress)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.progresscolor};

  .MuiCircularProgress-svg {
    width: 5rem;
    height: 5rem;
  }
`;
