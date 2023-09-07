import React, { useEffect } from "react";
import Slide from "../components/common/Slide";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { eachStepState } from "../recoil/commonState";

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
  height: 100%;
  display: flex;
  justify-self: center;
  align-items: center;
  margin: 0;
  padding: 3rem;
  width: 100%;
`;
