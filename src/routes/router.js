import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
// import TestPage from "../pages/TestPage";
import { Layout } from "../layout/Layout";
import LoginPage from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          {/* <Route path="/test" element={<TestPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
