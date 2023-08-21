import styled from "styled-components";
import { COLOR } from "../styles/color";

function MainPage() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const redirectUrl = process.env.REACT_APP_REDIRECT_URL;
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=repo,write:org,read:user`;
  const handleLogin = () => {
    window.location.href = githubURL;
  };
  return (
    <div>
      <button onClick={handleLogin}>깃허브 로그인</button>
    </div>
  );
}

export default MainPage;
