import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { activeState, eachStepState, modalState } from "../recoil/commonState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Button from "@mui/material/Button";
import { LinearStepper } from "./Stepper";
import { Header, checkTokenValid } from "./Header";
import StepInfo from "../components/common/StepInfo";
import { FinishDialog } from "../components/common/modal/FinishDialog";
import { BaseDialog } from "../components/common/modal/BaseDialog";
import { repoDataAtomFamily } from "../recoil/repoData";
import { layoutType } from "../recoil/templateState";

export const Layout = () => {
  const [activeStep, setActiveStep] = useRecoilState(activeState);
  const [stepCompleted, setStepComplted] = useRecoilState(
    eachStepState(`${activeStep}`),
  );
  const repoName = useRecoilValue(repoDataAtomFamily("repoName"));
  const navigate = useNavigate();

  const preventGoBack = (event) => {
    const currentURL = window.location.href;
    const match = currentURL.match(/\/step(\d+)/);

    if (match) {
      const number = parseInt(match[1], 10);
      setActiveStep(number);
    }
  };

  useEffect(() => {
    (() => {
      window.addEventListener("popstate", preventGoBack);
    })();

    preventGoBack();

    // check if user logined
    checkTokenValid()
      .then((result) => {
        console.log(result);
        if (!result) navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });

    console.log(parseInt(window.location.href.match(/\/step(\d+)/)[1], 10));
    console.log(repoName);

    if (
      parseInt(window.location.href.match(/\/step(\d+)/)[1], 10) !== 1 &&
      (!repoName || repoName === "")
    ) {
      navigate("/");
    }

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);

  const handleNext = () => {
    navigate(`/step${activeStep + 1}`);
    setActiveStep(activeStep + 1);
  };
  const handlePre = () => {
    navigate(`/step${activeStep - 1}`);
    setActiveStep(activeStep - 1);
  };
  const [modalValue, setModalValue] = useRecoilState(modalState("finishModal"));
  const handleOpen = () => setModalValue(true);

  return (
    <StLayout>
      <Header burger={true} logout={false} />
      <ContentsContainer>
        <LinearStepper />
        <StepContainer>
          <ExplainWrapper>
            <StepInfo type={"steps"} />
          </ExplainWrapper>
          <StepContentsContainer>
            <StepContentsWrapper>
              <Outlet />
            </StepContentsWrapper>
            <BottomContainer>
              {activeStep > 1 ? (
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
                onClick={() => (activeStep === 6 ? handleOpen() : handleNext())}
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
  width: 100%;
  height: 100%;
  background-color: ${COLOR.MAIN_WHITE};
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  margin-left: 2.6rem;
  border-top-left-radius: 2rem;
  background-color: ${COLOR.MAIN_BACKGROUND};
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 2.5rem;
`;

const ExplainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  height: 100%;
  min-width: 22rem;
`;

const StepContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0rem 2rem;
  background-color: ${COLOR.MAIN_BACKGROUND};
`;

const ButtonWrapper = styled(Button)`
  padding: 1rem 2rem;
  font-size: 1rem;
`;
