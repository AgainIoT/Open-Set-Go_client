import { COLOR } from "../../styles/color.js";
import { styled } from "styled-components";
import LOGO from "../../assets/images/Logo.svg";
export default function Footer() {
  return (
    // <div className="footer" style={{ backgroundColor: COLOR.MAIN_WHITE }}>
    //   {/* <InfoH1>license blabla</InfoH1> */}
    //   <LogoImg src={LOGO}/>
    // </div>
    <StFooter>
      <LogoDiv>
        <LogoImg src={LOGO} />
      </LogoDiv>
      <Hr />
      <InfoP>Copyright ⓒ AgainIoT All rights reserved.</InfoP>
    </StFooter>
  );
}

const StFooter = styled.div`
  height: 15rem;
  padding: 3rem;
  background-color: ${COLOR.MAIN_WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const LogoDiv = styled.div`
  padding: 1rem 0rem 1rem 0rem;
`;

const LogoImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Hr = styled.hr`
  width: 80%;
  text-align: center;
  background-color: ${COLOR.MAIN_BACKGROUND};
`;

const InfoP = styled.p`
  padding-top: 1rem;
  font-size: 1rem;
  align-content: center;
`;
