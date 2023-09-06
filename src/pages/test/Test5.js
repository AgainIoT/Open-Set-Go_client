import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { eachStepState } from "../../recoil/commonState";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function Test5() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("5"));
  useEffect(() => {
    setStepComplted(true);
  }, []);
  return (
    <>
      <p>test5</p>
    </>
  );
}

export default Test5;
