import { Typography } from "@mui/material";
import propTypes from "prop-types";
import styled from "styled-components";
import DeskTop from "../../assets/images/desktop.svg";
const Step1 = () => {
  return (
    <StStep1>
      <ImgDiv>
        <DesktopImg src={DeskTop} alt="haha"/>
      </ImgDiv>
      <TextDiv>
        <TitleTypo variant="h3">You can create Repository easily</TitleTypo>
        <DescTypo>
          Create a repository to start a new open-source project.<br></br>You can choose
          the environment(e.g., programming<br></br>language, framework, .gitignore,
          etc.) for your project.
        </DescTypo>
      </TextDiv>
    </StStep1>
  );
};

Step1.propTypes = {};

const StStep1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const ImgDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const DesktopImg = styled.img`
  width: 80%;
  height: 80%;
  `;

const TextDiv = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  gap: 1rem;
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
  line-height: 2.2rem;
  font-weight: 200;
  font-family: "Inter", sans-serif;
`;

export default Step1;
