import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Main from "../pages/Main/Main";
import LinkTree from "../pages/LinkTree/LinkTree";
import { urlLinkData } from "../constants/urlLinkData";

export default function UIRouter() {
  return (
    <Routes>
      <Route
        path={urlLinkData.linkTree}
        element={<MainLayout Children={LinkTree} />}
      />
      <Route path={urlLinkData.home} element={<MainLayout Children={Main} />} />
      <Route path="*" element={<Navigate to={urlLinkData.home} replace />} />
    </Routes>
  );
}
