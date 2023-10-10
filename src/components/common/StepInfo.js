import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import StepData from "../../data/StepData.json";
import { activeState } from "../../recoil/commonState";
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
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
  gap: 2rem;
`;

const TitleH1 = styled(Typography)`
  font-size: 2.2rem;
  text-align: center;
`;

const ContentP = styled.p`
  margin: 0rem 2rem 0rem 2rem;
  font-size: 1.3rem;
  text-align: justify;
  line-height: 2.2rem;
`;

const ButtonWrapper = styled(Button)`
  height: 100%;
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
  margin-top: 50%;
  font-size: 2rem;
`;

const Box_ = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
`;

export default StepInfo;
