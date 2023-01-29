import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Main from "../pages/Main/Main";

export default function UIRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout Children={Main} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
