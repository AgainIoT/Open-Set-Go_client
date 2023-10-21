import styled from "styled-components";
import { useRecoilValue } from "recoil";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { activeState } from "../recoil/commonState";
import StepData from "../data/StepData.json";

export const LinearStepper = () => {
  const activeStep = useRecoilValue(activeState);

  return (
    <StStepperContainer>
      <StepperWraper activeStep={activeStep - 1} alternativeLabel>
        {StepData.StepData.map((label) => (
          <Step key={label.step}>
            <StepLabelWrapper>{label.title}</StepLabelWrapper>
          </Step>
        ))}
      </StepperWraper>
    </StStepperContainer>
  );
};

const StStepperContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 0 0rem 0;
`;

const StepperWraper = styled(Stepper)`
  width: 100%;
  font-size: 8rem;
`;

const StepLabelWrapper = styled(StepLabel)`
  width: 100%;

  span {
    font-size: 1rem;
  }

  .MuiStepLabel-alternativeLabel {
    margin-top: 0.5rem;
  }
  .MuiStepLabel-iconContainer {
    .MuiSvgIcon-root {
      font-size: 2.2rem;
    }
    .MuiStepIcon-text {
      font-size: 1.5rem;
    }
  }
`;
