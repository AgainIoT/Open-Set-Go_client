import styled from "styled-components";
import { templateMode } from "../../recoil/templateState";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  modalState,
  activeState,
} from "../../recoil/commonState";
import Button from "@mui/material/Button";
import StepData from "../../data/StepData.json";

//StepInfo: Component for description of each step (located on the left side of the screen)
const ReviewStepInfo = () => {
  //using recoil for matching step information and step
  const activeStep = useRecoilValue(activeState);
  const [templateMod, setTemplateMod] = useRecoilState(templateMode);

  return (
    <div>
      {StepData.StepData.filter((eachStep) => eachStep.id === activeStep).map(
        (it) => {
          const [modalValue, setModalValue] = useRecoilState(
            modalState(it.type),
          );
          const handleOpen = (toggle) => {
            setModalValue(true);
            setTemplateMod(toggle);
          };
          return (
            <div key={it.step}>
              <Box>
                <StStepInfo>
                  <ContentP>{it.content}</ContentP>
                  {activeStep > 1 ? (
                    <ButtonWrapper
                      size="large"
                      variant="text"
                      disableElevation
                      onClick={() => handleOpen(false)}
                    >
                      Find Template
                    </ButtonWrapper>
                  ) : (
                    <div></div>
                  )}
                  {activeStep > 2 ? (
                    <ButtonWrapper
                      size="large"
                      variant="text"
                      disableElevation
                      onClick={() => handleOpen(true)}
                    >
                      Generate on your own
                    </ButtonWrapper>
                  ) : (
                    <div></div>
                  )}
                </StStepInfo>
              </Box>
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
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
`;

const ContentP = styled.p`
  margin: 0rem 2rem 0rem 2rem;
  text-align: justify;
  word-wrap: break-word;
  font-size: 1.7rem;
  line-height: 2.2rem;
`;

const ButtonWrapper = styled(Button)`
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
  height: 100%;
  margin: 1rem;
  font-size: 2rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
`;

export default ReviewStepInfo;
