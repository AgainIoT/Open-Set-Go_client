import styled from "styled-components";
import { Typography } from "@mui/material";
import StepData from "../../data/StepData.json";
import Button from "@mui/material/Button";
import { activeState } from "../../recoil/commonState";
import { useRecoilState, useRecoilValue } from "recoil";
import { eachStepState, modalState } from "../../recoil/commonState";

//StepInfo: Component for description of each step (located on the left side of the screen)
const StepInfo = () => {
  //using recoil for matching step information and step
  const activeStep = useRecoilValue(activeState);
  // const [modalValue, setModalValue] = useRecoilState(modalState());
  // const handleOpen = () => setModalValue(true);

  return (
    <div>
      {StepData.StepData.filter((eachStep) => eachStep.id === activeStep).map(
        (it) => {
          const [modalValue, setModalValue] = useRecoilState(modalState(it.type));
          const handleOpen = () => setModalValue(true);
          return (
            <div key={it.step}>
              <StStepInfo>
                <TitleH1>
                  Step{it.step}. {it.title}
                </TitleH1>
                <ContentP>{it.content}</ContentP>
                {activeStep > 1 ? (
                  <ButtonWrapper
                    variant="contained"
                    disableElevation
                    onClick={handleOpen}
                  >
                    Find
                  </ButtonWrapper>
                ) : (
                  <div></div>
                )}
              </StStepInfo>
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
`;

export default StepInfo;
