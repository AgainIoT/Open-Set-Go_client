import styled from "styled-components";
import { COLOR } from "../styles/color";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "@mui/material/Button";
import { Header } from "./Header";
import StepInfo from "../components/common/StepInfo";
import { CancelDialog } from "../components/common/modal/CancelDialog";
import { BaseDialog } from "../components/common/modal/BaseDialog";
import { activeState, eachStepState, modalState } from "../recoil/commonState";

export const ReviewLayout = () => {
  const [activeStep, setActiveState] = useRecoilState(activeState);
  const [stepCompleted, setStepComplted] = useRecoilState(
    eachStepState(`${activeStep + 1}`),
  );
  const navigate = useNavigate();

  const [modalValue, setModalValue] = useRecoilState(modalState("cancelModal"));
  const handleOpen = () => setModalValue(true);

  return (
    <StLayout>
      <Header burger={true} pages={[]} settings={[]} />
      <ContentsContainer>
        <StepContainer>
          <ExplainWrapper>
            <StepInfo />
          </ExplainWrapper>
          <StepContentsContainer>
            <StepContentsWrapper>
              <Outlet />
            </StepContentsWrapper>
            <BottomContainer>
              <ButtonWrapper
                variant="contained"
                disableElevation
                onClick={() => (handleOpen())}
              >
                Cancel
              </ButtonWrapper>
              <div></div>
              <ButtonWrapper
                variant="contained"
                disabled={!stepCompleted}
                onClick={() => (handleOpen())}
              >
                Send
              </ButtonWrapper>
            </BottomContainer>
          </StepContentsContainer>
        </StepContainer>
      </ContentsContainer>
      <BaseDialog type={"cancelModal"}>
        <CancelDialog type={"cancelModal"} />
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
