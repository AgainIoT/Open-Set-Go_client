import styled from "styled-components";
import useZoomIn from "../../hooks/useZoomIn";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { Typography } from "@mui/material";
import DeskTop from "../../assets/images/desktop.svg";


//Step2: Component for description on the main page (a brief description of the project)
const Step2 = () => {
  const zoominItem = useZoomIn(1.5, 0);
  const fadeinItem = useScrollFadeIn("left", 1.5, 0);
  return (
    <StStep2>
      <ImgDiv {... zoominItem}>
        <DesktopImg src={DeskTop}/>
      </ImgDiv>
      <TextDiv {... fadeinItem}>
        <TitleTypo variant="h3">You can create Repository easily</TitleTypo>
        <DescTypo>
          Create a repository to start a new open-source project.<br></br>You can choose
          the environment(e.g., programming<br></br>language, framework, .gitignore,
          etc.) for your project.
        </DescTypo>
      </TextDiv>
    </StStep2>
  );
};

const StStep2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 5rem 0rem 5rem 0rem ;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const DesktopImg = styled.img`
  width: 70%;
  height: 70%;
  `;

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 3rem;
  padding-left: 2rem;
  gap: 1rem;
`;

const TitleTypo = styled(Typography)`
  width: 100%;
  height: fit-content;
  font-size: 3.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

const DescTypo = styled(Typography)`
  width: 100%;
  height: fit-content;
  font-size: 2rem;
  font-weight: 200;
  font-family: "Inter", sans-serif;
  text-align: justify;
  line-height: 2.2rem;
`;

export default Step2;
