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

const getUser = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_LOCAL_SERVER_URL}/user`,
    "",
    {
      withCredentials: true,
    },
  );
  return res;
};

function MainPage() {
  // useEffect(() => {
  // getUser();
  // }, []);
  return (
    <>
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
