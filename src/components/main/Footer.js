import { styled } from "styled-components";
import { COLOR } from "../../styles/color.js";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 15rem;
  background-color: ${COLOR.MAIN_WHITE};
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 100%;
  padding: 1rem 0rem 1rem 0rem;
`;

const LogoImg = styled.img`
  width: 35%;
  height: 35%;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 33%;
  height: 100%;
  padding-left: 5rem;
  padding-top: 1rem;
`;

const InfoP = styled.p`
  justify-content: center;
  align-content: center;
  font-size: 1.2rem;
`;

const VlineDiv = styled.div`
  height: 10rem;
  border-left: thin solid #c9c9c9;
`;
const GithubDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 33%;
  height: 100%;
`;

const DocsP = styled.p`
  font-family: "Inter", sans-serif;
`;

const GithubIcon = styled(GitHubIcon)`
  margin-left: 2rem;
  color: ${COLOR.MAIN_BLACK};
  font-size: "3.3rem";
`;
