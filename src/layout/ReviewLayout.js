import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useState } from "react";
import { useRecoilState } from "recoil";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import StepInfo from "../components/common/StepInfo";
import { FinishDialog } from "../components/common/modal/FinishDialog";
import { ReviewDialog } from "../components/common/modal/ReviewDialog";
import { CancelDialog } from "../components/common/modal/CancelDialog";
import { BaseDialog } from "../components/common/modal/BaseDialog";
import { modalState } from "../recoil/commonState";

export const ReviewLayout = () => {

  const [finishModalValue, setFinishModalValue] = useRecoilState(modalState("finishModal"));
  const [reviewModalValue, setReviewModalValue] = useRecoilState(modalState("reviewModal"));
  const [cancelModalValue, setCancelModalValue] = useRecoilState(modalState("cancelModal"));

  const handleFinishOpen = () => {
    setFinishModalValue(true);
    setTmp("finishModal");
    console.log(tmp);
  };
  const handleReviewOpen = () => {
    setReviewModalValue(true);
    setTmp("reviewModal");
    console.log(tmp);
  };
  const handleCancelOpen = () => {
    setCancelModalValue(true);
    setTmp("cancelModal");
    console.log(tmp);
  };

  const [tmp, setTmp] = useState();

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
                onClick={handleCancelOpen}
              >
                Cancel
              </ButtonWrapper>
              <div></div>
              <ButtonWrapper
                variant="contained"
                disableElevation
                onClick={handleReviewOpen}
              >
                Send
              </ButtonWrapper>
            </BottomContainer>
          </StepContentsContainer>
        </StepContainer>
      </ContentsContainer>
      <BaseDialog type={tmp}>
        {
          tmp === "cancelModal" ? <CancelDialog type={"cancelModal"}/> : <ReviewDialog type={"reviewModal"} />
        }
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
