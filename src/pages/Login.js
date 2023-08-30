import styled from "styled-components";
import { COLOR } from "../styles/color";
import axios from "axios";
import { useEffect } from "react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

let count = 1;

const getAccessToken = async () => {
  const params = new URLSearchParams(location.search);
  const authCode = params.get("code");

  const res = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/auth/github-login?code=${authCode}`,
    "",
    { withCredentials: true },
  );
  if (200 <= res.status && res.status < 300){
    const auth = await cookies.get("Authentication");
    cookies.set("Authentication", auth);
  }
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
