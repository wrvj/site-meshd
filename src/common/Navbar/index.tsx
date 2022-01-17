import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./styles";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";

//icons
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState<"opened" | "closed">("closed");
    const menuRef = useRef(null);
    useOnClickOutside(menuRef, closeMobileMenu);

    function closeMobileMenu() {
        setMobileMenu("closed");
    }

    return (
        <NavbarContainer>
            <div className="content" ref={menuRef}>
                <div className="logo-and-hamburger">
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
                            src="/images/Simbolo_Branco.svg"
                            alt="Logo"
                        />
                    </Link>

                    <IconButton
                        className={`hamburger ${
                            mobileMenu === "opened" && "hide"
                        }`}
                        onClick={() => setMobileMenu("opened")}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        className={`hamburger ${
                            mobileMenu === "closed" && "hide"
                        }`}
                        onClick={() => setMobileMenu("closed")}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>

                <ul className={mobileMenu}>
                    <li>
                        <Link className="link" to="/" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            to="/about"
                            onClick={closeMobileMenu}
                        >
                            Agency
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            to="/work"
                            onClick={closeMobileMenu}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            to="/contact"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
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
