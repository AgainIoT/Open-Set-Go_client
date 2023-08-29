import React, { Component } from "react";
import Slider from "react-slick";
import Slide from "../components/common/Slide";
import styled from "@emotion/styled";
function LicensePage() {
  return (
    <StLayout>
      <Slide />
    </StLayout>
  );
}

export default LicensePage;

const StLayout = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  justify-content: center;
`;
