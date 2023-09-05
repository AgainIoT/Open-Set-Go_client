import { Typography } from "@mui/material";
import propTypes from "prop-types";
import styled from "styled-components";

const Step1 = () => {
  return (
    <StStep1>
      <ImgDiv>
        <img src="../../assets/images/Desktop.png" alt="haha"/>
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
  height: 50%;
  flex-direction: row;
  border: 1px solid black;
`;

const ImgDiv = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid red;
`;

const DesktopImg = styled.img`
  width: 100%;
  height: 100%;
  `;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  border: 1px solid green;
  gap: 1rem;
`;

const TitleTypo = styled(Typography)`
  font-size: 4rem;
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
