import { styled } from "styled-components";
import { COLOR } from "../../styles/color.js";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step5 from "./Step5.js";
import { Review } from "./Review.js";
//Steps: Component containing descriptions on the main page;
export default function Steps() {
  return (
    <StSteps className="STEPS" style={{ backgroundColor: COLOR.MAIN_BACKGROUND }}>
      <Step1/>
      <Step2/>
      <Step5/>
      <Review/>
    </StSteps>
  );
}

const StSteps = styled.div`
  width: 100%;
  height: fit-content;
`;
