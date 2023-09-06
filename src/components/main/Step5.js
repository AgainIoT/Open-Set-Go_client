import Step3 from "./Step3";
import Step4 from "./Step4";
import { styled } from "styled-components";
import { COLOR } from "../../styles/color.js";

const Step5 = () => {
  return (<StStep5><Step3/><Step4/></StStep5>);
};

const StStep5 = styled.div`
  background: linear-gradient(to bottom, ${COLOR.MAIN_WHITE}, ${COLOR.MAIN_BACKGROUND});
`;
export default Step5;
