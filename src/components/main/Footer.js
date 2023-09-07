import { COLOR } from "../../styles/color.js";
import { styled } from "styled-components";
import LOGO from "../../assets/images/title.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <StFooter>
      <LogoDiv>
        <LogoImg src={LOGO} />
      </LogoDiv>
      <InfoDiv>
        <InfoP>
          <strong>Development</strong> | team AgainIoT<br></br>
        </InfoP>
        <InfoP>
          <strong>Contact us</strong> | again.iot.contact@gmail.com<br></br>
        </InfoP>
        <InfoP>@2023 by AgainIoT All right reserved</InfoP>
        <br></br>
      </InfoDiv>
      <VlineDiv />
      <GithubDiv>
        <a href="https://open-set-go.netlify.app/">
          <DocsP>DOCS</DocsP>
        </a>
        <a href="https://github.com/AgainIoT/Open-Set-Go">
          <GithubIcon style={{ color: COLOR.MAIN_BLACK, fontSize: "3.3rem" }} />
        </a>
      </GithubDiv>
    </StFooter>
  );
}

const StFooter = styled.div`
  height: 15rem;
  background-color: ${COLOR.MAIN_WHITE};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoDiv = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem 1rem 0rem;
  /* border: 1px solid green; */
`;

const LogoImg = styled.img`
  width: 35%;
  height: 35%;
`;

const InfoDiv = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid red; */
  padding-left: 5rem;
  padding-top: 1rem;
`;

const InfoP = styled.p`
  /* border: 1px solid aqua; */
  justify-content: center;
  align-content: center;
  font-size: 1.2rem;
`;

const VlineDiv = styled.div`
  border-left: thin solid #c9c9c9;
  height: 10rem;
`;
const GithubDiv = styled.div`
  height: 100%;
  width: 33%;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const DocsP = styled.p`
  font-family: "Inter", sans-serif;
`;

const GithubIcon = styled(GitHubIcon)`
  color: ${COLOR.MAIN_BLACK};
  font-size: "3.3rem";
  margin-left: 2rem;
`;
