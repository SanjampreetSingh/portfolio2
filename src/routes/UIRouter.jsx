import { Routes, Route, Navigate } from "react-router-dom";

import App from "../components/App";


export default function UIRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
