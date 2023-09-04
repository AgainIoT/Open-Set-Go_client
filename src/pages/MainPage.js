import styled from "styled-components";
import { COLOR } from "../styles/color";
import Welcome from "../components/main/Welcome";
import Desc from "../components/main/Desc";
import Footer from "../components/main/Footer";
import Steps from "../components/main/Steps";
import css from "../../src/mainpage.css";
import { useEffect } from "react";
import axios from "axios";
import propTypes from "prop-types";
import { MainHeader } from "../layout/MainHeader";

function MainPage() {
  return (
    <>
      <MainHeader />
      <Welcome />
      <Desc />
      <Steps />
      <Footer />
    </>
  );
}

MainPage.propTypes = {
  auth: propTypes.bool,
  logout: propTypes.func,
};

export default MainPage;
