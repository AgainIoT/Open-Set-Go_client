import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import StepData from "../../data/StepData.json";
import Button from "@mui/material/Button";
import { activeState } from "../../recoil/commonState";
import { useRecoilState, useRecoilValue } from "recoil";
import { eachStepState, modalState } from "../../recoil/commonState";

//StepInfo: Component for description of each step (located on the left side of the screen)
const StepInfo = () => {
  //using recoil for matching step information and step
  const activeStep = useRecoilValue(activeState);

  return (
    <div>
      {StepData.StepData.filter((eachStep) => eachStep.id === activeStep).map(
        (it) => {
          const [modalValue, setModalValue] = useRecoilState(modalState(it.type));
          const handleOpen = () => setModalValue(true);
          return (
            <div key={it.step}>
              <Box_><StStepInfo>
                <TitleH1>
                  Step{it.step}. {it.title}
                </TitleH1>
                <ContentP>{it.content}</ContentP>
                {activeStep > 1 ? (
                  <ButtonWrapper
                    size="large"
                    variant="text"
                    disableElevation
                    onClick={handleOpen}
                  >
                    Find Template
                  </ButtonWrapper>
                ) : (
                  <div></div>
                )}
              </StStepInfo></Box_>
            </div>
          );
        },
      )}
    </div>
  );
};

const StStepInfo = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TitleH1 = styled(Typography)`
  font-size: 2.2rem;
  text-align: center;
`;

const ContentP = styled.p`
  margin: 0rem 2rem 0rem 2rem;
  text-align: justify;
  font-size: 1.3rem;
  line-height: 2.2rem;
`;

const ButtonWrapper = styled(Button)`
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
  height: 100%;
  margin-top: 50%;
  font-size: 2rem;
`;

const Box_ = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export default StepInfo;
