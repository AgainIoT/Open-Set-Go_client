import { styled, keyframes } from "styled-components";
import { COLOR } from "../../styles/color.js";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../recoil/authorize";
import { useNavigate, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import propTypes from "prop-types";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import MAIN from "../../assets/images/mainImg.svg";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
const githubURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=repo,write:org,read:user,user:email`;
const handleLogin = () => {
  window.location.href = githubURL;
};
export const Welcome = () => {
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
  const animatedItem = useScrollFadeIn();
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
              document
                .querySelector(".STEPS")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            learn more
          </LearnmoreBtn>
        </Stack>
      </InfoDiv>
      <ImgDiv>
        <MainImg {... useScrollFadeIn("left", 1.7, 0)} src={MAIN} />
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
  background: ${COLOR.MAIN_WHITE};
  text-align: center;
  border-bottom: 0.5px solid ${COLOR.MAIN_HOVER};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
  } to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 50%;
  height: 80vh;
  padding-left: 30rem;
  text-align: center;
  animation: ${fadeIn} 1.7s;
  /* border: 1px solid pink; */
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const MainImg = styled.img`
  width: 80%;
  height: 80%;
  margin-right: 15rem;
  /* border: 1px solid green; */
`;
export const Title = styled.h1`
  text-align: left;
  line-height: 100%;
  font-size: 6.5rem;
  font-weight: 700;
  /* border: 1px solid black; */
`;

export const SubTitle = styled.h3`
  margin: 1rem 0rem 1rem 0rem;
  line-height: 120%;
  text-align: left;
  font-size: 3rem;
  font-weight: 00;
  /* border: 1px solid green; */
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
