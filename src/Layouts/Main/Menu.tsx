import { styled } from "styled-components";
import { BsFillHouseDoorFill, BsFillFilePersonFill, BsFillGearFill, BsFillCameraFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useAppState, useFaderColor } from "logic/StateContext/hooks";

const StyledIcon = styled.div`
  svg {
    width: 20px;
    height: 20px;
    fill: inherit;
  }
`;

export default function Menu() {
  const { pathname } = useLocation();
  const { setTakeShot } = useAppState();
  const backgroundColor = useFaderColor();
  const iconColor = useFaderColor(60);
  const activeIconColor = useFaderColor(100);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: "80vw", opacity: 0, scale: 0, y: 100, x: "-50%" }}
        animate={{ width: pathname === "/" ? "80vw" : "60vw", opacity: 1, scale: 1, y: 0, x: "-50%" }}
        className="z-10 fixed rounded  h-10 flex items-center justify-evenly p-2"
        style={{
          width: "80vw",
          left: "50%",
          bottom: 20,
          backgroundColor,
        }}
      >
        <Link to="/">
          <StyledIcon
            style={{
              fill: pathname === "/" ? activeIconColor : iconColor,
            }}
          >
            <BsFillHouseDoorFill />
          </StyledIcon>
        </Link>
        <Link to="/settings">
          <StyledIcon
            style={{
              fill: pathname === "/settings" ? activeIconColor : iconColor,
            }}
          >
            <BsFillGearFill />
          </StyledIcon>
        </Link>
        <Link to="/about">
          <StyledIcon
            style={{
              fill: pathname === "/about" ? activeIconColor : iconColor,
            }}
          >
            <BsFillFilePersonFill />
          </StyledIcon>
        </Link>
        {pathname === "/" && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <StyledIcon
              onClick={() => setTakeShot(true)}
              style={{
                fill: activeIconColor,
              }}
            >
              <BsFillCameraFill />
            </StyledIcon>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
