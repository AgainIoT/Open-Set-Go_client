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
        <Title>Open, Set, Go</Title>
        <SubTitle>start a project easily, quickly and conveniently</SubTitle>

        <Stack spacing={2} direction="row">
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
          {Logined === true ? (
            <LoginBtn variant="contained" onClick={() => navigate("/select")}>
              get started
            </LoginBtn>
          ) : (
            <LoginBtn variant="contained" onClick={handleLogin}>
              login
            </LoginBtn>
          )}
        </Stack>
      </InfoDiv>
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
  flex-direction: column;
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
    transform: translate3d(0, 10%, 0);
  } to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  text-align: center;
  animation: ${fadeIn} 1.7s;
`;
export const Title = styled.h1`
  font-size: 6.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const SubTitle = styled.h3`
  padding-bottom: 2rem;
  font-size: 3rem;
  font-weight: 00;
`;

const LearnmoreBtn = styled(Button)({
  backgroundColor: `${COLOR.MAIN_PURPLE}`,
  fontSize: "15px",
  "&:hover": {
    backgroundColor: `${COLOR.MAIN_PURPLE}`,
  },
});

const LoginBtn = styled(Button)({
  backgroundColor: "black",
  fontSize: "15px",
  "&:hover": {
    backgroundColor: "black",
  },
});
