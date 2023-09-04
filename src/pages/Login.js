import styled from "styled-components";
import { COLOR } from "../styles/color";
import { css } from "../../src/loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil/authorize";
import propTypes from "prop-types";

let cnt = 0;

function LoginPage() {
  const login = useSetRecoilState(authState);
  const navigate = useNavigate();
  const getAccessToken = async () => {
    if (!cnt++) {
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
        login(true);
      }
    }
  };
  useEffect(() => {
    getAccessToken();
    navigate("/home");
  }, []);
  return (
    <div className="background">
      <h1 className="str">logging in</h1>
    </div>
  );
}

LoginPage.propTypes = {
  login: propTypes.func,
  auth: propTypes.bool,
};

export default LoginPage;
