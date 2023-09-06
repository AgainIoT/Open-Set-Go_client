import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import propTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { token } from "../../recoil/authorize";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
const githubURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=repo,write:org,read:user,user:email`;
const handleLogin = () => {
  window.location.href = githubURL;
};
export const Welcome = () => {
  const accessToken = useRecoilValue(token);
  const navigate = new useNavigate();
  return (
    <StWelcome>
      <Title>Open, Set, Go</Title>
      <SubTitle>your project</SubTitle>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            document
              .querySelector(".STEPS")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          learn more
        </Button>
        {accessToken ? (
          <Button variant="outlined" onClick={() => navigate("/step1")}>
            get started
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleLogin}>
            login
          </Button>
        )}
      </Stack>
    </StWelcome>
  );
};

Welcome.propTypes = {
  auth: propTypes.bool,
  logout: propTypes.func,
};

export const StWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 80vh;
  background-image: linear-gradient(
    45deg,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`;

export const Title = styled.h1`
  font-size: 7rem;
`;

export const SubTitle = styled.h3`
  font-size: 4rem;
  padding-bottom: 2rem;
`;
