import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
// import TestPage from "../pages/TestPage";
import { Layout } from "../layout/Layout";
import LoginPage from "../pages/Login";
import { useEffect, useState } from "react";

const Router = () => {
  const [authState, setAuthState] = useState(false);
  const login = () => {
    setAuthState(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage auth={authState} />} />
        <Route path="/login" element={<LoginPage setAuthState={login} />} />
        <Route element={<Layout />}>
          {/* <Route path="/test" element={<TestPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
