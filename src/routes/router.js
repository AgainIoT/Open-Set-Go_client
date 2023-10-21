import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/Login";
import SelectTypePage from "../pages/SelectTypePage";
import PRTemplatePage from "../pages/PRTemplatePage";
import { Layout } from "../layout/Layout";
import { ReviewLayout } from "../layout/ReviewLayout";
import CreateRepo from "../pages/CreateRepoPage";
import LicensePage from "../pages/LicensePage";
import ReadmeTemplatePage from "../pages/ReadmeTemplatePage";
import ContributingTemplatePage from "../pages/ContributingTemplatePage";
import IssueTemplatePage from "../pages/IssueTemplatePage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/select" element={<SelectTypePage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route element={<ReviewLayout />}>
          <Route path="/step0" element={<IssueTemplatePage />} />
          <Route path="/step1" element={<CreateRepo />} />
          <Route path="/step2" element={<LicensePage />} />
          <Route path="/step3" element={<PRTemplatePage />} />
          <Route path="/step4" element={<IssueTemplatePage />} />
          <Route path="/step5" element={<ContributingTemplatePage />} />
          <Route path="/step6" element={<ReadmeTemplatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
