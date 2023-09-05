import { useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import StepData from "../../data/StepData.json";
import { PropTypes } from "prop-types";
import { activeState } from "../../recoil/commonState";
import { useRecoilValue } from "recoil";

const StepInfo = () => {
  const activeStep = useRecoilValue(activeState);
  console.log("stepinfo:", activeStep);

  return (
    <div>
      {StepData.StepData.filter((eachStep) => eachStep.id === activeStep).map(
        (it) => {
          return (
            <div key={it.step}>
              <StStepInfo>
                <TitleH1>{it.title}</TitleH1>
                <ContentP>{it.content}</ContentP>
              </StStepInfo>
            </div>
          );
        },
      )}
    </div>
  );
};

StepInfo.propTypes = {
  num: PropTypes.node.isRequired,
};

const StStepInfo = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TitleH1 = styled(Typography)`
  font-size: 2.2rem;
  text-align: center;
`;

const ContentP = styled.p`
  margin: 0rem 2rem 0rem 2rem;
  text-align: justify;
  font-size: 1.3rem;
  line-height: 2.2rem;
`;

export default StepInfo;
