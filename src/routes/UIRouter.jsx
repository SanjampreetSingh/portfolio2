import { Navigate, Route, Routes } from "react-router-dom";

import { urlLinkData } from "../constants/urlLinkData";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog/Blog";
import Coach from "../pages/Coach/Coach";
import LinkTree from "../pages/LinkTree/LinkTree";
import Main from "../pages/Main/Main";

export default function UIRouter() {
  return (
    <Routes>
      <Route
        path={urlLinkData.linkTree}
        element={<MainLayout Children={LinkTree} />}
      />
      <Route path={urlLinkData.blog} element={<MainLayout Children={Blog} />} />
      <Route path={urlLinkData.home} element={<MainLayout Children={Main} />} />
      <Route
        path={urlLinkData.coach}
        element={<MainLayout Children={Coach} />}
      />
      <Route path="*" element={<Navigate to={urlLinkData.home} replace />} />
    </Routes>
  );
}
