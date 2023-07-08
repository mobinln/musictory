import { Route, Routes } from "react-router-dom";
import MainLayout from "Layouts/Main";

import HomePage from "pages/Home";
import AboutPage from "pages/About";
import SettingsPage from "pages/Settings";

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
