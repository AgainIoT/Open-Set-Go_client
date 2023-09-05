import styled from "styled-components";
import { COLOR } from "../../styles/color";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepIcon from "@mui/material/StepIcon";
import AddIcon from "@mui/icons-material/Add";
import { useRecoilValue } from "recoil";
import { activeState } from "../../recoil/commonState";

import StepData from "../../data/StepData.json";

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
  const activeStep = useRecoilValue(activeState);

  return (
    <StStepperContainer>
      <StepperWraper activeStep={activeStep} alternativeLabel>
        {StepData.StepData.map((label) => (
          <Step key={label.step}>
            <StepLabelWrapper>{label.title}</StepLabelWrapper>
          </Step>
        ))}
      </StepperWraper>
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
