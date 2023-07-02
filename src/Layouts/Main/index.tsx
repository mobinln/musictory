import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { useAppState } from "logic/StateContext/hooks";

export default function MainLayout() {
  const { color } = useAppState();

  return (
    <div style={{ backgroundColor: color?.rgb, minHeight: "100vh" }}>
      <Outlet />
      <Menu />
    </div>
  );
}
