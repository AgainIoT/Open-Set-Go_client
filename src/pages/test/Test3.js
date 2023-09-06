import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { eachStepState } from "../../recoil/commonState";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function Test3() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("3"));
  useEffect(() => {
    setStepComplted(true);
  }, []);
  return (
    <>
      <p>test3</p>
    </>
  );
}

export default Test3;
