import { styled } from "styled-components";
import { Icon, Typography } from "@mui/material";
import { COLOR } from "../../styles/color.js";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PR from "../../assets/icons/pullrequest.svg";
import NEXT from "../../assets/icons/next.svg";

const Step1 = () => {
  const folderIcon = (
    <FolderOutlinedIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }}/>
  );
  const lockIcon = (
    <LockOutlinedIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }} />
  );
  const warningIcon = (
    <WarningAmberIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }} />
  );
  const handIcon = (
    <HandshakeOutlinedIcon style={{ color: COLOR.MAIN_NAVY, fontSize: "3.3rem" }}/>
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
    </StStep1>
  );
};

const StStep1 = styled.div`
  background-color: ${COLOR.MAIN_WHITE};
  margin: 2rem 0rem 2rem 0rem;
  padding: 2rem 0rem 6rem 0rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleTypo = styled(Typography)`
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const DescTypo = styled(Typography)`
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const HighlightTypo = styled(Typography)`
  font-family: "Inter", sans-serif;
  color: ${COLOR.MAIN_BLUE};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const StepDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Circle = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: ${COLOR.MAIN_BACKGROUND};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepNameP = styled.p`
  font-size: 1.2rem;
`;
const NextImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 3rem;
`;

const SharedAttr = `
  color: ${COLOR.MAIN_NAVY};
  font-size: 3.3rem;
`;

const PRIcon = styled.img`
  color: ${COLOR.MAIN_NAVY};
  width: 3rem;
  height: 3rem;
`;

export default Step1;
