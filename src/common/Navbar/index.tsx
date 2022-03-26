import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./styles";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";

//icons
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const menuLinksTimeout = 500;

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState<"opened" | "closed">("closed");
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, closeMobileMenu);

  const [startAnim, setStartAnim] = useState<boolean>(false);
  const [menuAnimOrder, setMenuAnimOrder] = useState(1);

  useEffect(() => {
    setTimeout(() => setStartAnim(true), 500);
  }, []);

  function closeMobileMenu() {
    setMobileMenu("closed");
  }

  return (
    <NavbarContainer>
      <div className="content" ref={menuRef}>
        <div className="logo-and-hamburger">
          <Fade in={startAnim} timeout={900}>
            <Link
              className="logoLink"
              to="/"
              onClick={() => {
                backToTop();
                closeMobileMenu();
              }}
            >
              <img
                className="logo"
                src="/images/logo_horizontal_white.svg"
                alt="Logo"
              />
            </Link>
          </Fade>

          <IconButton
            className={`hamburger ${mobileMenu === "opened" && "hide"}`}
            onClick={() => setMobileMenu("opened")}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            className={`hamburger ${mobileMenu === "closed" && "hide"}`}
            onClick={() => setMobileMenu("closed")}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <ul className={mobileMenu}>
          <li>
            <Grow
              in={startAnim && menuAnimOrder > 0}
              timeout={menuLinksTimeout}
              onEntered={() => setMenuAnimOrder((prev) => prev + 1)}
            >
              <Link className="link" to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </Grow>
          </li>
          <li>
            <Grow
              in={startAnim && menuAnimOrder > 1}
              timeout={menuLinksTimeout}
              onEntered={() => setMenuAnimOrder((prev) => prev + 1)}
            >
              <Link className="link" to="/about" onClick={closeMobileMenu}>
                Agency
              </Link>
            </Grow>
          </li>
          <li>
            <Grow
              in={startAnim && menuAnimOrder > 2}
              timeout={menuLinksTimeout}
              onEntered={() => setMenuAnimOrder((prev) => prev + 1)}
            >
              <Link className="link" to="/work" onClick={closeMobileMenu}>
                Work
              </Link>
            </Grow>
          </li>
          <li>
            <Grow
              in={startAnim && menuAnimOrder > 3}
              timeout={menuLinksTimeout}
              onEntered={() => setMenuAnimOrder((prev) => prev + 1)}
            >
              <Link className="link" to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </Grow>
          </li>
        </ul>
      </div>
      <Divider sx={{ background: "#303030" }} />
    </NavbarContainer>
  );
}

// Hook
function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
