import { Welcome } from "../components/main/Welcome";
import Footer from "../components/main/Footer";
import Steps from "../components/main/Steps";
import propTypes from "prop-types";
import { Header } from "../layout/MainHeader";
import { Cookies } from "react-cookie";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { token } from "../recoil/authorize";
function MainPage() {
  const cookies = new Cookies();
  const setAccessToken = useSetRecoilState(token);
  useEffect(() => {
    const accessToken = cookies.get("Authentication");
    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      setAccessToken(null);
    }
  }, []);
  return (
    <>
      <Header />
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
