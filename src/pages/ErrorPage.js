import styled from "styled-components";
import { Header } from "../layout/Header";
import {COLOR} from "../styles/color";
import BG from "../assets/images/errorBgImage.png";
import C from "../assets/images/curveImg.png";
import { Iron } from "@mui/icons-material";
function ErrorPage() {
  return (
    <StErrorPage>
      <ContentWrapper>
        <ErrorTitleP>404</ErrorTitleP>
        <ErrorinfoP>Opps... This page was not found.</ErrorinfoP>
        <DetailP>The requested URL can not be found or might be temporarily unavailable.</DetailP>
      </ContentWrapper>
      <Bgimg src={C} />
    </StErrorPage>
  );
}

const StErrorPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  //border: 3px solid red;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  height: 60%;
  margin-bottom: 3rem;
  //border: 1px solid blue;
`;

const ErrorTitleP = styled.p`
  font-size: 18rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;

`;

const ErrorinfoP = styled.p`
  padding-top: 1rem;
  font-size: 2.5rem;
  font-family: "Inter", sans-serif;
  font-weight: bold;

`;
const DetailP = styled.p`
  font-size: 1.5rem;
  font-family: "IBM Plex Sans";
  padding-top: 1rem;
`;

const Bgimg = styled.img`
  width: 100%;
  height: 40%;
  //border: 1px solid black;
`;

export default ErrorPage;
