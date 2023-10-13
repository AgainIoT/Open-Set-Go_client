import styled from "styled-components";
import { Typography } from "@mui/material";
import LICENSE from "../../assets/images/licenseEx.svg";

//Step3: Component for the bottom description of the main page (license description)
const Step3 = () => {
  return (
    <StStep3>
      <TextDiv>
        <TitleTypo variant="h3">Look into Licenses at a glance</TitleTypo>
        <DescTypo>
        You must have licenses for open source projects.<br></br>We show you the licenses provided by GitHub.<br></br> You can determine and select a license based on the<br></br> information provided about it.
        </DescTypo>
      </TextDiv>
      <ImgDiv>
        <LicenseImg src={LICENSE} />
      </ImgDiv>
    </StStep3>
  );
};

const SharedAttr = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StStep3 = styled.div`
  ${SharedAttr};
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 10rem 0rem 10rem 0rem;
`;

const TextDiv = styled.div`
  ${SharedAttr};
  flex-direction: column;
  width: 40%;
  height: 100%;
  margin-left: 1rem;
  gap: 1rem;
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
  line-height: 2.2rem;
`;

const ImgDiv = styled.div`
  ${SharedAttr};
  width: 60%;
  height: 100%;
`;

const LicenseImg = styled.img`
  width: 90%;
  height: 90%;
`;

export default Step3;
