import styled from "styled-components";
import { COLOR } from "../../styles/color";
import { Typography } from "@mui/material";
import { CardSlider } from "./CardSlider";
export const FirstInfo = () => {
  return (
    <StFirstInfo>
      <TextContainer>
        <Title variant="h2">
          Review your project <br />
          as an open source
        </Title>
        <SubTitle variant="h4">
          Our &apos;Open Source Operations Review&apos; feature will check
          whether your project is operating well as an open source project
          through the following items.
        </SubTitle>
      </TextContainer>
      <SliderSection>
        <CardSlider />
      </SliderSection>
    </StFirstInfo>
  );
};

const StFirstInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled(Typography)`
  color: ${COLOR.MAIN_NAVY};
  font-weight: bold;
  font-size: 3.8rem;
  white-space: pre-wrap;
`;
const SubTitle = styled(Typography)`
  color: ${COLOR.FONT_GRAY};
`;

const SliderSection = styled.div`
  width: 100%;
  height: 20%;
`;
