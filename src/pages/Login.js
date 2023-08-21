import styled from "styled-components";
import { COLOR } from "../styles/color";
import axios from "axios";
import { useEffect } from "react";

let count = 1;

const getAccessToken = async () => {
  const params = new URLSearchParams(location.search);
  const authCode = params.get("code");
  const test = await axios.get(
    `http://localhost:8080/auth/github-login?code=${authCode}`,
  );
  console.log(test);
};

function LoginPage() {
  useEffect(() => {
    if (count === 1) {
      getAccessToken();
      count++;
    }
  }, []);
  return (
    <div>
      <p>깃허브 로그인</p>
    </div>
  );
}

export default LoginPage;
