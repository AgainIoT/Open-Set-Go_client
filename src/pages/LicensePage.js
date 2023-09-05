import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import Slide from "../components/common/Slide";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { eachStepState } from "../recoil/commonState";
function LicensePage() {
  const [stepComplete, setStepComplted] = useRecoilState(eachStepState("2"));
  useEffect(() => {
    setStepComplted(true);
  }, []);

  return (
    <StLayout>
      <Slide />
    </StLayout>
  );
}

export default LicensePage;

const StLayout = styled.div`
  /* background-color: red; */
  height: 100%; /* 흰 박스에 맞게 크기 조절 됨 */
  display: flex;
  justify-self: center;
  align-items: center;
  margin: 0;
  padding: 3rem;
  width: 100%;
`;
