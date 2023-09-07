import styled from "styled-components";
import { COLOR } from "../styles/color";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import StepInfo from "../components/common/StepInfo";
import { LinearStepper } from "./Stepper";
import { Header } from "./Header";

import { activeState, eachStepState, modalState } from "../recoil/commonState";
import { useRecoilState } from "recoil";
import { FinishDialog } from "../components/common/modal/FinishDialog";
import { BaseDialog } from "../components/common/modal/BaseDialog";

export const Layout = () => {
  const [activeStep, setActiveState] = useRecoilState(activeState);
  const [stepCompleted, setStepComplted] = useRecoilState(
    eachStepState(`${activeStep + 1}`),
  );
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/step${activeStep + 2}`);
    setActiveState(activeStep + 1);
  };
  const handlePre = () => {
    navigate(`/step${activeStep}`);
    setActiveState(activeStep - 1);
  };
  const [modalValue, setModalValue] = useRecoilState(modalState("finishModal"));
  const handleOpen = () => setModalValue(true);

  return (
    <StLayout>
      <Header main={false} pages={[]} settings={["Logout"]} />
      <ContentsContainer>
        <LinearStepper />
        <StepContainer>
          <ExplainWrapper>
            <StepInfo />
          </ExplainWrapper>
          <StepContentsContainer>
            <Outlet />
          </StepContentsContainer>
        </StepContainer>
        <BottomContainer>
          {activeStep > 0 ? (
            <ButtonWrapper
              variant="contained"
              disableElevation
              onClick={() => handlePre()}
            >
              Prev
            </ButtonWrapper>
          ) : (
            <div></div>
          )}
          <ButtonContainer>
            <ButtonWrapper
              variant="contained"
              disabled={!stepCompleted}
              onClick={() => (activeStep === 4 ? handleOpen() : handleNext())}
            >
              Next
            </ButtonWrapper>
          </ButtonContainer>
        </BottomContainer>
      </ContentsContainer>
      <BaseDialog type={"finishModal"}>
        <FinishDialog type={"finishModal"} />
      </BaseDialog>
    </StLayout>
  );
};

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background-color: ${COLOR.MAIN_WHITE};
  overflow-y: hidden;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
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
  height: 76%;
`;

const ExplainWrapper = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  justify-content: center;
`;

const StepContentsContainer = styled.div`
  display: flex;
  overflow-y: scroll;
  width: 80%;
  height: 100%;
  padding: 3rem;
  border-top-left-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: 20%;
  padding: 1rem 2rem 1rem 2rem;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  bottom: 0;
  gap: 1rem;
`;

const ButtonWrapper = styled(Button)`
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
`;
