import styled from "styled-components";
import axios from "axios";
import { Title } from "../components/main/Welcome";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { avatar, id, name, token } from "../recoil/authorize";
import { Cookies } from "react-cookie";
import propTypes from "prop-types";

let cnt = 0;

function LoginPage() {
  const setId = useSetRecoilState(id);
  const setName = useSetRecoilState(name);
  const setAvatar = useSetRecoilState(avatar);
  const navigate = useNavigate();

  const cookies = new Cookies();
  const setToken = useSetRecoilState(token);

  const login = async () => {
    if (!cnt++) {
      await getAccessToken();
      const res = await getUser();
      const id = res.id;
      const name = res.name;
      const avatar = res.avatar;
      setId(id);
      setName(name);
      setAvatar(avatar);
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("avatar", avatar);
      console.log(localStorage);
    }
  };

  const getUser = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/user/profile`,
      {
        withCredentials: true,
      },
    );
    if (200 <= res.status && res.status < 300) {
      return res.data;
    }
  };

  const getAccessToken = async () => {
    const params = new URLSearchParams(location.search);
    const authCode = params.get("code");

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/github-login?code=${authCode}`,
      "",
      { withCredentials: true },
    );
    if (200 > res.status || res.status >= 300) {
      alert("login failed");
    } else {
      const accessToken = cookies.get("Authentication");
      setToken(accessToken);
    }
  };

  useEffect(() => {
    const accessToken = cookies.get("Authentication");
    setToken(accessToken);
    console.log(accessToken);
    login();
    navigate("/home");
  }, []);

  return (
    <StLogin>
      <Title>logging in</Title>
    </StLogin>
  );
}

LoginPage.propTypes = {
  login: propTypes.func,
  auth: propTypes.bool,
};

export default LoginPage;

const StLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;
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
