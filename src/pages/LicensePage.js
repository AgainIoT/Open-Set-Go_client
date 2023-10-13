import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { eachStepState } from "../recoil/commonState";
import Slide from "../components/common/Slide";

//LicensePage: pages for license steps;
function LicensePage() {
  //using recoil for connecting stepper and step info;
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("2"));

  useEffect(() => {
    setStepComplted(true);
  }, []);

  return (
    <StLicensePage>
      <Slide />
    </StLicensePage>
  );
}

export default LicensePage;

const StLicensePage = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem;
  margin: 0;
`;
