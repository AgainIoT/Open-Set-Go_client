import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { Typography } from "@mui/material";
import Spinner from "../../assets/images/spinnerEllipsis.gif";

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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background: ${COLOR.MAIN_WHITE};
  opacity: 0.93;
`;

const LoadingText = styled.div`
  color: ${COLOR.MAIN_BLACK};
  font-family: "SUIT Variable";
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.9rem;
  text-align: center;
`;

const LoadingTitle = styled(Typography)`
  font-size: 3rem;
  font-weight: 600;
`;
