// import Step from "./Step";
import { COLOR } from "../../styles/color.js";
import Step1 from "./Step1";
import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";
import { styled } from "styled-components";
import Step5 from "./Step5.js";
export default function Steps() {
  return (
    <StSteps className="STEPS" style={{ backgroundColor: COLOR.MAIN_BACKGROUND }}>
      <Step1/>
      <Step2/>
      <Step5/>
    </StSteps>
  );
}

const StSteps = styled.div`
  width: 100%;
  height: fit-content;
`;
