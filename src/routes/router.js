import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/Login";
import PRTemplatePage from "../pages/PRTemplatePage";
import { Layout } from "../layout/Layout";
import CreateRepo from "../pages/CreateRepoPage";
import LicensePage from "../pages/LicensePage";
import FinishTestPage from "../pages/FinishTest";
import ReadmeTemplatePage from "../pages/ReadmeTemplatePage";
import ContributingTemplatePage from "../pages/ContributingTemplatePage";
import LoginPage from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/step1" element={<CreateRepo />} />
          <Route path="/step2" element={<LicensePage />} />
          <Route path="/step3" element={<PRTemplatePage />} />
          <Route path="/step4" element={<ContributingTemplatePage />} />
          <Route path="/step5" element={<ReadmeTemplatePage />} />
          <Route path="/step6" element={<FinishTestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
