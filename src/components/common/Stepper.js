import styled from "styled-components";
import { COLOR } from "../../styles/color";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepIcon from "@mui/material/StepIcon";
import AddIcon from "@mui/icons-material/Add";

const steps = [
  "Step1",
  "Step2",
  "Step3",
  "Step4",
  "Step5",
  "Step6",
  "Step7",
  "Step8",
];

export default function LinearStepper() {
  return (
    <StStepperContainer>
      <StepperWraper activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabelWrapper>{label}</StepLabelWrapper>
          </Step>
        ))}
      </StepperWraper>{" "}
    </StStepperContainer>
  );
}

const StStepperContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0 2rem 0;
`;

const StepperWraper = styled(Stepper)`
  width: 100%;
  font-size: 8rem;
`;

const StepWrapper = styled(Step)`
  font-size: 8rem;
  padding: 0.8rem;
`;

const StepLabelWrapper = styled(StepLabel)`
  width: 100%;

  span {
    font-size: 1.4rem;
  }

  .MuiStepLabel-iconContainer {
    .MuiSvgIcon-root {
      font-size: 2.4rem;
    }
    .MuiStepIcon-text {
      font-size: 1.4rem;
    }
  }
`;
