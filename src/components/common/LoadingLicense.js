import styled from "styled-components";
import { COLOR } from "../../styles/color";
import LOAD from "../../assets/images/loadingimg.gif";

export const LoadingLicense = () => {
  return (
    <Background>
      <LoadingImg src={LOAD} alt="loading.." width="5%" />
      <LoadingText>One moment please ...</LoadingText>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

const LoadingImg =styled.img`
  width: 5rem;
  height: 5rem;
`;

