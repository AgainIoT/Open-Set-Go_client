import { useEffect } from "react";
import { Welcome } from "../components/main/Welcome";
import Footer from "../components/main/Footer";
import Steps from "../components/main/Steps";
import propTypes from "prop-types";
import { Header } from "../layout/Header";

function MainPage() {
  return (
    <>
      <Header burger={true} pages={["Steps"]} settings={["Logout"]} />
      <Welcome />
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
