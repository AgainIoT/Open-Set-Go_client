import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { Layout } from "../layout/Layout";
import CreateRepo from "../pages/CreateRepoPage";
import LoginPage from "../pages/Login";
import LicensePage from "../pages/LicensePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          {/* <Route path="/test" element={<TestPage/>}/> */}
          <Route path="/license" element={<LicensePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
