import { styled, keyframes } from "styled-components";
import { COLOR } from "../../styles/color.js";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../recoil/authorize";
import { useNavigate, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import propTypes from "prop-types";
import useZoomIn from "../../hooks/useZoomIn";
import MAIN from "../../assets/images/mainImg.svg";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
const githubURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=repo,write:org,read:user,user:email`;
const handleLogin = () => {
  window.location.href = githubURL;
};
export const Welcome = () => {
  const zoominItem = useZoomIn(1.2, 0);
  const location = useLocation();

  const preventGoBack = (event) => {
    history.pushState(null, "", location.href);
  };

  useEffect(() => {
    history.pushState(null, "", location.href);
    (() => {
      window.addEventListener("popstate", preventGoBack);
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);
  const Logined = useRecoilValue(isLogin);
  const navigate = new useNavigate();
  return (
    <StWelcome>
      <InfoDiv>
        <Title>
          The best way to
          <br />
          manage project
        </Title>
        <SubTitle>
          We help you manage open-source project
          <br />
          easier and better
        </SubTitle>

        <Stack spacing={2} direction="row">
          {Logined === true ? (
            <LoginBtn variant="contained" onClick={() => navigate("/select")}>
              {"get started >"}
            </LoginBtn>
          ) : (
            <LoginBtn variant="contained" onClick={handleLogin}>
              login
            </LoginBtn>
          )}
          <LearnmoreBtn
            variant="contained"
            onClick={() => {
              const offset = document.querySelector(".header").clientHeight;
              window.scrollTo({
                behavior: "smooth",
                top:
                  document.querySelector(".STEPS").getBoundingClientRect().top -
                  document.body.getBoundingClientRect().top -
                  offset,
              });
            }}
          >
            learn more
          </LearnmoreBtn>
        </Stack>
      </InfoDiv>
      <ImgDiv {...zoominItem}>
        <MainImg src={MAIN} />
      </ImgDiv>
    </StWelcome>
  );
};

Welcome.propTypes = {
  auth: propTypes.bool,
  logout: propTypes.func,
};

const StWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 80vh;
  background: linear-gradient(
    to bottom,
    ${COLOR.MAIN_HOVER},
    ${COLOR.MAIN_BACKGROUND}
  );
  text-align: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 15%, 0);
  } to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const updown = keyframes`
  0% {
    transform: translateY(1rem);
  }
  100% {
    transform: translateY(-1rem);
  }
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 50%;
  height: 80vh;
  padding-left: 20rem;
  text-align: center;
  animation: ${fadeIn} 1.5s;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 90%;
`;

const MainImg = styled.img`
  width: 90%;
  height: 90%;
  margin-right: 23rem;
  animation: ${updown} 2s ease-in-out infinite alternate-reverse;
`;
export const Title = styled.h1`
  text-align: left;
  line-height: 100%;
  font-size: 6.5rem;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  margin: 1rem 0rem 1rem 0rem;
  line-height: 120%;
  text-align: left;
  font-size: 3rem;
  font-weight: 00;
`;

const LearnmoreBtn = styled(Button)({
  backgroundColor: "black",
  height: "5rem",
  width: "17rem",
  fontSize: "15px",
  "&:hover": {
    backgroundColor: "black",
  },
});

const LoginBtn = styled(Button)({
  height: "5rem",
  width: "17rem",
  backgroundColor: `${COLOR.MAIN_PURPLE}`,
  fontSize: "15px",
  "&:hover": {
    backgroundColor: `${COLOR.MAIN_PURPLE}`,
  },
});
