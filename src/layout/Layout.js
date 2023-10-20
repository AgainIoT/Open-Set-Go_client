import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { activeState, eachStepState, modalState } from "../recoil/commonState";
import { useRecoilState } from "recoil";
import Button from "@mui/material/Button";
import { LinearStepper } from "./Stepper";
import { Header } from "./Header";
import StepInfo from "../components/common/StepInfo";
import { FinishDialog } from "../components/common/modal/FinishDialog";
import { BaseDialog } from "../components/common/modal/BaseDialog";

export const Layout = () => {
  const [activeStep, setActiveState] = useRecoilState(activeState);
  const [stepCompleted, setStepComplted] = useRecoilState(
    eachStepState(`${activeStep + 1}`),
  );
  const navigate = useNavigate();

  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    alert("please press 'prev' button instead of this");
  };

  useEffect(() => {
    (() => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", preventGoBack);
      navigate("/step1");
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);

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
      <Header burger={true} pages={[]} settings={[]} />
      <ContentsContainer>
        <LinearStepper />
        <StepContainer>
          <ExplainWrapper>
            <StepInfo />
          </ExplainWrapper>
          <StepContentsContainer>
            <StepContentsWrapper>
              <Outlet />
            </StepContentsWrapper>
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
              <ButtonWrapper
                variant="contained"
                disabled={!stepCompleted}
                onClick={() => (activeStep === 4 ? handleOpen() : handleNext())}
              >
                Next
              </ButtonWrapper>
            </BottomContainer>
          </StepContentsContainer>
        </StepContainer>
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
  width: 100vw;
  height: 100vh;
  background-color: ${COLOR.MAIN_WHITE};
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  margin-left: 2.6rem;
  border-top-left-radius: 2rem;
  background-color: ${COLOR.MAIN_BACKGROUND};
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 76vh;
  gap: 2.5rem;
`;

const ExplainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  min-width: 22rem;
  height: 100vh;
`;

const StepContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StepContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 3rem;
  border-top-left-radius: 2rem;
  background-color: ${COLOR.MAIN_WHITE};
  overflow-y: scroll;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0rem 3rem 2rem 3rem;
  background-color: ${COLOR.MAIN_WHITE};
`;

const ButtonWrapper = styled(Button)`
  padding: 1rem 2rem;
  font-size: 1rem;
`;
