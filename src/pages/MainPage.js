import styled from "styled-components";
import { COLOR } from "../styles/color";
import React from "react";

function HomePage() {

  const GithubButtonProps  = {
      clientId : 'clientId',
      redirectUrl : 'http://localhost:3000',
      githubURL : `https://github.com/login/oauth/authorize?client_id=a92ea7bd4cc152530209&redirect_uri=http://localhost:3000/`
  };

  function handleLogin(e){
      window.location.href = githubURL}
  
  return (
      <div >
          <button onClick={handleLogin}>
              깃허브 로그인
          </button>
      </div>
  );
}

export default HomePage;