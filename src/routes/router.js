import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PRTemplatePage from "../pages/PRTemplatePage";
import { Layout } from "../layout/Layout";
import CreateRepo from "../pages/CreateRepoPage";
import LicensePage from "../pages/LicensePage";
import FinishTestPage from "../pages/FinishTest";
import Test3 from "../pages/Test3";
import Test4 from "../pages/Test4";
import Test5 from "../pages/Test5";
// import TestPage from "../pages/TestPage";
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
          <Route path="/step2" element={<LicensePage />} />
          <Route path="/step1" element={<CreateRepo />} />
          <Route path="/step3" element={<Test3 />} />
          <Route path="/step4" element={<Test4 />} />
          <Route path="/step5" element={<Test5 />} />

          <Route path="/step6" element={<FinishTestPage />} />
          <Route path="/PRTemplate" element={<PRTemplatePage />} />
          <Route path="/readme" element={<ReadmeTemplatePage />} />
          <Route path="/contributing" element={<ContributingTemplatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
