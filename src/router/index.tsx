import MainLayout from "Layouts/Main";
import HomePage from "pages/Home";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<>About</>} />
        <Route path="settings" element={<>Settings</>} />
      </Route>
    </Routes>
  );
}
