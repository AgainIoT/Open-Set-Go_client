import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

import MarkdownPreview from "../components/common/MarkdownPreview";
import PRTemplatePage from "../pages/PRTemplatePage";
import { Layout } from "../layout/Layout";
import CreateRepo from "../pages/CreateRepoPage";
import LoginPage from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/test" element={<MarkdownPreview />} />
          <Route path="/PRTemplate" element={<PRTemplatePage />} />
          <Route path="/step1" element={<CreateRepo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
