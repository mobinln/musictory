import { Route, Routes } from "react-router-dom";
import MainLayout from "Layouts/Main";

import HomePage from "pages/Home";
import Settings from "pages/Settings";

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="about" element={<>About</>} />
      </Route>
    </Routes>
  );
}
