import { Typography } from "@mui/material";
import styled from "styled-components";
import MODAL from "../../assets/images/modal.svg";
import MARKER from "../../assets/images/li_mark.svg";

const Step4 = () => {
  return (
    <StStep4>
      <ImageDiv>
        <ModalImg src={MODAL} />
      </ImageDiv>
      <TextDiv>
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
      </TextDiv>
    </StStep4>
  );
};

const SharedAttr = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StStep4 = styled.div`
  padding: 10rem 0rem 10rem 0rem;
  ${SharedAttr}
  width: 100%;
  height: fit-content;
  flex-direction: row;
`;

const ImageDiv = styled.div`
  ${SharedAttr}
  width: 50%;
  height: 100%;
`;

const ModalImg = styled.img`
  width: 85%;
  height: 85%;
`;

const TextDiv = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 50%;
  height: 100%;
  gap: 1.5rem;
`;

const TitleTypo = styled(Typography)`
  font-size: 3.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  width: 100%;
  height: fit-content;
`;

const DescTypo = styled(Typography)`
  text-align: justify;
  height: fit-content;
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 200;
  font-family: "Inter", sans-serif;
`;

const ExUl = styled.ul`
  list-style-image: url(${MARKER});
  margin-left: 3rem;
  line-height: 2.4rem;
`;

const ExLi = styled.li`
  font-size: 1.8rem;
  font-weight: 200;
  font-family: "Inter", sans-serif;
`;

export default Step4;
