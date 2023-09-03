import styled from "styled-components";
import { COLOR } from "../styles/color";
import { css } from "../../src/loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

let cnt = 0;

function LoginPage() {
  const navigate = useNavigate();

  const getAccessToken = async () => {
    if (!cnt++) {
      const params = new URLSearchParams(location.search);
      const authCode = params.get("code");

      const res = await axios.post(
        `${process.env.REACT_APP_LOCAL_SERVER_URL}/auth/github-login?code=${authCode}`,
        "",
        { withCredentials: true },
      );
      if (200 <= res.status && res.status < 300) {
        console.log(res);
      }
      // navigate("/home");
    }
  };
  useEffect(() => {
    getAccessToken();
  }, []);
  return (
    <div className="background">
      <h1 className="str">logging in</h1>
    </div>
  );
}

export default LoginPage;
