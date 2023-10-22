import styled from "styled-components";
import { Typography } from "@mui/material";
import MODAL from "../../assets/images/pr2.svg";
import MARKER from "../../assets/icons/li_mark.svg";
import useZoomIn from "../../hooks/useZoomIn";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
//Step4: Components (used on the main page) that contain content related to the use of templates
const Step4 = () => {
  const zoominItem = useZoomIn(1.2, 0);
  const fadeinItem = useScrollFadeIn("left", 1.2, 0);
  return (
    <StStep4>
      <ImageDiv {...zoominItem}>
        <ModalImg src={MODAL} />
      </ImageDiv>
      <TextDiv>
        <Tmp {...fadeinItem}>
          <TitleTypo variant="h3">
            Create your templates conveniently<br></br>with the templates we
            provide
          </TitleTypo>
          <DescTypo>
            We provide a famous template.<br></br>You can choose and use the
            template you need.
          </DescTypo>
          <ExUl>
            <ExLi>Issue Template</ExLi>
            <ExLi>Pull-Request Template</ExLi>
            <ExLi>CONTRIBUTING.md</ExLi>
            <ExLi>README.md</ExLi>
          </ExUl>
        </Tmp>
      </TextDiv>
    </StStep4>
  );
};

const SharedAttr = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tmp = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  padding-left: 6rem;
  margin-left: 1rem;
  gap: 1.5rem;
`;
const StStep4 = styled.div`
  ${SharedAttr}
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 10rem 0rem 10rem 0rem;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const ModalImg = styled.img`
  width: 80%;
  height: 80%;
  box-shadow: 0.1rem 0.1rem  0.5rem grey;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 1rem;
  gap: 1.5rem;
`;

const TitleTypo = styled(Typography)`
  width: fit-content;
  height: fit-content;
  font-size: 3.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

const DescTypo = styled(Typography)`
  width: fit-content;
  height: fit-content;
  font-size: 2rem;
  font-weight: 200;
  font-family: "Inter", sans-serif;
  text-align: justify;
  line-height: 2rem;
`;

const ExUl = styled.ul`
  width: fit-content;
  margin-left: 3rem;
  line-height: 2.4rem;
  list-style-image: url(${MARKER});
`;

const ExLi = styled.li`
  font-size: 1.8rem;
  font-weight: 200;
  font-family: "Inter", sans-serif;
`;

export default Step4;
