import Step from "./Step";
import { COLOR } from "../../styles/color.js";

export default function Steps() {
  return (
    <>
      <div className="steps" style={{ backgroundColor: COLOR.MAIN_BACKGROUND }}>
        <Step step="Step1" desc="I got something to tell you..." />
        <Step step="Step2" desc="I got something to tell you..." />
        <Step step="Step3" desc="I got something to tell you..." />
        <Step step="Step4" desc="I got something to tell you..." />
        <Step step="Step5" desc="I got something to tell you..." />
      </div>
    </>
  );
}
