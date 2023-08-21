import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MarkdownPreview from "../components/common/MarkdownPreview";
import PRTemplatePage from "../pages/PRTemplatePage";
import { Layout } from "../layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route element={<Layout />}>
          <Route path="/test" element={<MarkdownPreview />} />
          <Route path="/PRTemplate" element={<PRTemplatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
