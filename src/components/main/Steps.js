import Step from "./Step";
import { COLOR } from "../../styles/color.js";
import Step2 from "./Step2";
import { styled } from "styled-components";
export default function Steps() {
  return (
    <StSteps className="STEPS" style={{ backgroundColor: COLOR.MAIN_BACKGROUND }}>
      <Step2/>
      {/* <Step step="Step2" desc="I got something to tell you..." />
      <Step step="Step3" desc="I got something to tell you..." />
      <Step step="Step4" desc="I got something to tell you..." />
      <Step step="Step5" desc="I got something to tell you..." /> */}
    </StSteps>
  );
}

const StSteps = styled.div`
  width: 100%;
  height: 80%;
`;
