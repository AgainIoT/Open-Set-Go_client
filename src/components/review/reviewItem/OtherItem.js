import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { Box, CircularProgress, SvgIcon, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

const ReviewItem = (props) => {
  const data = props.data;

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
        <IconWrapper component={data.icon} iconcolor={COLOR.MAIN_NAVY} />
        <ItemProgress
          variant="determinate"
          value={100}
          progresscolor={COLOR.MAIN_ROSE}
        />
      </>
    ),
    null: (
      <>
        <IconWrapper
          component={WarningAmberOutlinedIcon}
          iconcolor={COLOR.MAIN_ORANGE}
        />
        <ItemProgress
          variant="determinate"
          value={100}
          progresscolor={COLOR.MAIN_ORANGE}
        />
      </>
    ),
  };

  return (
    <StItemBox>
      <ItemIconBox>
        {props.isLoading
          ? ItemIcon["default"]
          : ItemIcon[props.reviewData[data.item]]}
      </ItemIconBox>
      <TextContainer>
        <ItemTitle variant="h4">{data.title}</ItemTitle>
        <DecsText variant="subtitle1">{data.desc}</DecsText>
      </TextContainer>
    </StItemBox>
  );
};
export const ReviewList = (props) => {
  return (
    <StReviewList>
      {props.data.map((it) => {
        return (
          <ReviewItem
            key={it.item}
            data={it}
            isLoading={props.isLoading}
            reviewData={props.reviewData}
          />
        );
      })}
    </StReviewList>
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
