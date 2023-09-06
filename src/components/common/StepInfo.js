import styled from "styled-components";
import { Typography } from "@mui/material";
import StepData from "../../data/StepData.json";
import { activeState } from "../../recoil/commonState";
import { useRecoilValue } from "recoil";

//StepInfo: Component for description of each step (located on the left side of the screen)
const StepInfo = () => {
  //using recoil for matching step information and step
  const activeStep = useRecoilValue(activeState);

  return (
    <div>
      {StepData.StepData.filter((eachStep) => eachStep.id === activeStep).map(
        (it) => {
          return (
            <div key={it.step}>
              <StStepInfo>
                <TitleH1>
                  Step{it.step}. {it.title}
                </TitleH1>
                <ContentP>{it.content}</ContentP>
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

export default StepInfo;
