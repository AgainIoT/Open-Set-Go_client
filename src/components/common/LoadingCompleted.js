import styled from "styled-components";
import { COLOR } from "../../styles/color";

import Spinner from "../../assets/images/spinnerEllipsis.gif";
import { Typography } from "@mui/material";

export const LoadingCompleted = () => {
  return (
    <Background>
      <LoadingTitle>Open, Set, Go</LoadingTitle>
      <LoadingText>Setting up your repository.</LoadingText>
      <LoadingText>Rooting for you! </LoadingText>
      <img src={Spinner} alt="loading.." width="5%" />
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${COLOR.MAIN_WHITE};
  opacity: 0.93;
  z-index: 999;
`;

const LoadingText = styled.div`
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.9rem;
  text-align: center;
  color: ${COLOR.MAIN_BLACK};
`;

const LoadingTitle = styled(Typography)`
  font-size: 3rem;
  font-weight: 600;
`;
