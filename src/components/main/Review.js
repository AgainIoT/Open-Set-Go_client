import { styled } from "styled-components";
import { COLOR } from "../../styles/color.js";
import { Typography } from "@mui/material";
import checkPR from "../../assets/images/checkPR.svg";
import checkIssue from "../../assets/images/checkIssue.svg";
import checkRM from "../../assets/images/checkRM.svg";
import checkSecurity from "../../assets/images/checkSecurity.svg";
import checkCodeQL from "../../assets/images/checkCodeQL.svg";
import secretscan from "../../assets/images/checkSecret.svg";
import useZoomIn from "../../hooks/useZoomIn";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
export function Review() {
  const zoominItem = useZoomIn(1.5, 0);
  const fadeinItem = useScrollFadeIn("up", 1.5, 0);
  return (
    <StReview>
      <IntroDiv {...useScrollFadeIn("up", 1.5, 0.2)}>
        <TitleTypo>Check the status of existing repositories</TitleTypo>
        <DescTypo>
          checks that the existing repository is running well as opensource
        </DescTypo>
      </IntroDiv>
      <ImageDiv>
        <Row1Div>
          <ImgWrapper {...useScrollFadeIn("up", 1.0, 0.2)} src={checkPR} />
          <ImgWrapper {...useScrollFadeIn("up", 1.0, 0.4)} src={checkIssue} />
          <ImgWrapper {...useScrollFadeIn("up", 1.0, 0.6)} src={checkRM} />
        </Row1Div>
        <Row2Div>
          <ImgWrapper {...useScrollFadeIn("up", 1.0, 0.2)} src={checkSecurity} />
          <ImgWrapper {...useScrollFadeIn("up", 1.0, 0.4)} src={checkCodeQL} />
          <ImgWrapper {...useScrollFadeIn("up", 1.0, 0.6)} src={secretscan} />
        </Row2Div>
      </ImageDiv>
    </StReview>
  );
}

const StReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 6rem 0rem 6rem 0rem;
  margin: 2rem 0rem 2rem 0rem;
  background-color: ${COLOR.MAIN_WHITE};
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

const DescTypo = styled(Typography)`
  font-family: "Inter", sans-serif;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  line-height: normal;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 2rem 0rem;
`;

const Row1Div = styled.div`
  display: flex;

`;

const Row2Div = styled.div``;

const ImgWrapper = styled.img`
padding: 2rem;
`;
