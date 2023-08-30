import styled from "styled-components";
import { COLOR } from "../styles/color";
import Welcome from "../components/main/Welcome";
import Desc from "../components/main/Desc";
import Footer from "../components/main/Footer";
import Steps from "../components/main/Steps";
import css from "../../src/mainpage.css";

function MainPage() {
  return (
    <>
      <Welcome />
      <Desc />
      <Steps />
      <Footer />
    </>
  );
}

export default MainPage;
