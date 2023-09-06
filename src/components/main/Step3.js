import { Typography } from "@mui/material";
import styled from "styled-components";
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
  padding: 10rem 0rem 10rem 0rem;
  ${SharedAttr};
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const TextDiv = styled.div`
  ${SharedAttr};
  margin-left: 1rem;
  flex-direction: column;
  width: 40%;
  height: 100%;
  gap: 1rem;
`;

const TitleTypo = styled(Typography)`
  font-size: 3.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  width: fit-content;
  height: fit-content;
`;

const DescTypo = styled(Typography)`
  text-align: justify;
  height: fit-content;
  width: fit-content;
  font-size: 2rem;
  line-height: 2.2rem;
  font-weight: 200;
  font-family: "Inter", sans-serif;
`;

const ImgDiv = styled.div`
  width: 60%;
  height: 100%;
  ${SharedAttr};
`;

const LicenseImg = styled.img`
  width: 90%;
  height: 90%;
`;

export default Step3;
