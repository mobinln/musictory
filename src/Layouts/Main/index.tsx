import { Outlet } from "react-router-dom";
import Menu from "./Menu";

export default function MainLayout() {
  return (
    <div>
      <Outlet />
      <Menu />
    </div>
  );
}
