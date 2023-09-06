import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/Login";
import PRTemplatePage from "../pages/PRTemplatePage";
import { Layout } from "../layout/Layout";
import CreateRepo from "../pages/CreateRepoPage";
import LicensePage from "../pages/LicensePage";
import ReadmeTemplatePage from "../pages/ReadmeTemplatePage";
import ContributingTemplatePage from "../pages/ContributingTemplatePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/PRTemplate" element={<PRTemplatePage />} />
          <Route path="/step1" element={<CreateRepo />} />
          <Route path="/license" element={<LicensePage />} />
          <Route path="/readme" element={<ReadmeTemplatePage />} />
          <Route path="/contributing" element={<ContributingTemplatePage />} />
        </Route>
        {/* <Route element={<Layout num={1}/>}>
          <Route path="/test" element={<TestPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
