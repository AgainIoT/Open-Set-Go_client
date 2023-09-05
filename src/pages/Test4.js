import styled from "styled-components";
import { COLOR } from "../styles/color";
import { eachStepState } from "../recoil/commonState";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function Test4() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("4"));
  useEffect(() => {
    setStepComplted(true);
  }, []);
  return (
    <>
      <p>test4</p>
    </>
  );
}

export default Test4;
