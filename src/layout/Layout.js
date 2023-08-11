import styled from "styled-components";
import { COLOR } from "../styles/color";
import { Outlet, useLocation } from "react-router-dom";
import LinearStepper from "../components/common/Stepper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { MainHeader } from "./Header";
import { Typography } from "@mui/material";

export const Layout = () => {
  return (
    <StLayout>
      <MainHeader />
      <ContentsContainer>
        <LinearStepper />
        <StepContainer>
          <ExplainWrapper>
            <Typography variant="h6" noWrap></Typography>
          </ExplainWrapper>
          <StepContentsContainer>
            <Outlet />
          </StepContentsContainer>
        </StepContainer>
        <BottomContianer>
          <ButtonWrapper variant="contained" disableElevation>
            Contained
          </ButtonWrapper>
          <ButtonContainer>
            <ButtonWrapper variant="outlined">Primary</ButtonWrapper>
            <ButtonWrapper variant="contained" disabled>
              Disabled
            </ButtonWrapper>
          </ButtonContainer>
        </BottomContianer>
      </ContentsContainer>
    </StLayout>
  );
};

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100vw;
  height: 100%;
  background-color: ${COLOR.MAIN_WHITE};
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* margin-top: 9.5rem; */
  margin-left: 2.6rem;
  padding: 2rem 3rem 0 2rem;

  border-top-left-radius: 2rem;
  background-color: ${COLOR.MAIN_BACKGROUND};
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;

  width: 100%;
  height: 100%;
`;

const ExplainWrapper = styled.div`
  display: flex;
  width: 20%;
`;

const StepContentsContainer = styled.div`
  display: flex;
  overflow-y: scroll;

  width: 80%;
  background-color: ${COLOR.MAIN_WHITE};
`;

const BottomContianer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  padding: 1rem 2rem 1rem 2rem;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 1rem;
`;

const ButtonWrapper = styled(Button)`
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
`;
