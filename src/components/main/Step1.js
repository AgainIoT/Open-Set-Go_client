import { styled, keyframes } from "styled-components";
import { COLOR } from "../../styles/color.js";
import { useRef, useState } from "react";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { Typography } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PR from "../../assets/icons/pullrequest.svg";
import NEXT from "../../assets/icons/next.svg";

//Step1: Component for description on main page (project step description)
const Step1 = () => {
  const animatedItem = useScrollFadeIn();
  const folderIcon = (
    <FolderOutlinedIcon
      style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }}
    />
  );
  const lockIcon = (
    <LockOutlinedIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }} />
  );
  const warningIcon = (
    <WarningAmberIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }} />
  );
  const handIcon = (
    <HandshakeOutlinedIcon
      style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }}
    />
  );
  const infoIcon = (
    <InfoOutlinedIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }} />
  );
  const prIcon = <PRIcon src={PR} />;

  const tmpData = [
    {
      icon: folderIcon,
      iconInfo: "repository",
    },
    {
      icon: lockIcon,
      iconInfo: "license",
    },
    {
      icon: prIcon,
      iconInfo: "PR template",
    },
    {
      icon: warningIcon,
      iconInfo: "Issue template",
    },
    {
      icon: handIcon,
      iconInfo: "CONTRIBUTING.md",
    },
  ];

  const iconCircles = tmpData.map((it) => (
    <SetDiv key={it.icon}>
      <EachStepDiv>
        <Circle>{it.icon}</Circle>
        <StepNameP>{it.iconInfo}</StepNameP>
      </EachStepDiv>
      <NextImg src={NEXT} />
    </SetDiv>
  ));

  return (
    <StStep1>
      <AnimDiv {...animatedItem}>
        <IntroDiv>
          <TitleTypo>Make your repository in the easiest way</TitleTypo>
          <InfoDiv>
            <DescTypo>Create a project for open source through</DescTypo>
            <HighlightTypo>&nbsp;6 Steps</HighlightTypo>
          </InfoDiv>
        </IntroDiv>
        <StepDiv>
          {iconCircles}
          <EachStepDiv>
            <Circle>{infoIcon}</Circle>
            <p>README.md</p>
          </EachStepDiv>
        </StepDiv>
      </AnimDiv>
    </StStep1>
  );
};


const StStep1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 8rem 0rem 6rem 0rem;
  margin: 2rem 0rem 2rem 0rem;
  background-color: ${COLOR.MAIN_WHITE};
  gap: 4rem;
`;

const AnimDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 4rem;
`;
const IntroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleTypo = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 900;
  text-align: center;
  line-height: normal;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const DescTypo = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  line-height: normal;
`;

const HighlightTypo = styled(Typography)`
  color: ${COLOR.MAIN_BLUE};
  font-family: "Inter", sans-serif;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const StepDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 3rem;
`;

const SetDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const EachStepDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: ${COLOR.MAIN_BACKGROUND};
`;

const StepNameP = styled.p`
  font-size: 1.2rem;
`;

const NextImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 3rem;
`;

const PRIcon = styled.img`
  width: 3rem;
  height: 3rem;
  color: ${COLOR.MAIN_NAVY};
`;

export default Step1;
