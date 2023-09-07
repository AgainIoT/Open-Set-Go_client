import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import propTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { token } from "../../recoil/authorize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../styles/color.js";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
const githubURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=repo,write:org,read:user,user:email`;
const handleLogin = () => {
  window.location.href = githubURL;
};
export const Welcome = (ref) => {
  const accessToken = useRecoilValue(token);
  const navigate = new useNavigate();
  return (
    <StWelcome>
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
        {accessToken ? (
          <LoginBtn variant="contained" onClick={() => navigate("/step1")}>
            get started
          </LoginBtn>
        ) : (
          <LoginBtn variant="contained" onClick={handleLogin}>
            login
          </LoginBtn>
        )}
      </Stack>
    </StWelcome>
  );
};

Welcome.propTypes = {
  auth: propTypes.bool,
  logout: propTypes.func,
};

const StWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 80vh;
  background: linear-gradient(to bottom, ${COLOR.MAIN_HOVER}, ${COLOR.MAIN_BACKGROUND});
`;

export const Title = styled.h1`
  font-size: 6.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  font-size: 3rem;
  padding-bottom: 2rem;
  font-weight: 00;
`;

const LearnmoreBtn = styled(Button)({
  backgroundColor: `${COLOR.MAIN_PURPLE}`,
  "&:hover": {
    backgroundColor: `${COLOR.MAIN_PURPLE}`,
  },
});

const LoginBtn = styled(Button)({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "black",
  },
});
