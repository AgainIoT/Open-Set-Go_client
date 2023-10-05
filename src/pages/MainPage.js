import { Welcome } from "../components/main/Welcome";
import Footer from "../components/main/Footer";
import Steps from "../components/main/Steps";
import propTypes from "prop-types";
import { Header } from "../layout/Header";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isLogin } from "../recoil/authorize";
import axios from "axios";

async function checkTokenValid() {
  const isTokenValid = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/auth/checkToken`,
    {
      validateStatus: (status) => {
        return status < 500;
      },
      withCredentials: true,
    },
  );
  if (isTokenValid.status >= 400) {
    return false;
  } else {
    return true;
  }
}

function MainPage() {
  const setIsLogin = useSetRecoilState(isLogin);

  const checkIsLogin = async () => {
    setIsLogin(await checkTokenValid());
  };

  useEffect(() => {
    checkIsLogin();
  }, []);
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
