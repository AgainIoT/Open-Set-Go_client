import styled from "styled-components";
import { COLOR } from "../styles/color";
import axios from "axios";
import { Title } from "../components/main/Welcome";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { avatar, id, isLogin, name } from "../recoil/authorize";
import propTypes from "prop-types";

let cnt = 0;

function LoginPage() {
  const setId = useSetRecoilState(id);
  const setName = useSetRecoilState(name);
  const setAvatar = useSetRecoilState(avatar);
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(isLogin);

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
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    login();
    navigate("/");
  }, []);

  return (
    <StLogin>
      {/* <Title>logging in</Title> */}
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
  background: linear-gradient(
    to bottom,
    ${COLOR.MAIN_HOVER},
    ${COLOR.MAIN_BACKGROUND}
  );
`;
