import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { Layout } from "../layout/Layout";
import CreateRepo from "../pages/CreateRepoPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route element={<Layout />}>
          <Route path="/step1" element={<CreateRepo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
