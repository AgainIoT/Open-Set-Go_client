import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { eachStepState } from "../recoil/commonState";

function FinishTestPage() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("6"));
  useEffect(() => {
    setStepComplted(true);
  }, []);
  return (
    <>
      <p>test finish</p>
    </>
  );
}

export default FinishTestPage;
