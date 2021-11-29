import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./styles";
import Divider from "@mui/material/Divider";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";

export default function Navbar() {
  return (
    <NavbarContainer>
      <div className="content">
        <Link className="logoLink" to="/">
          <img className="logo" src="/images/Simbolo_Branco.svg" alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link className="link" to="/about">
              Agency
            </Link>
          </li>
          <li>
            <Link className="link" to="/work">
              Work
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <IconButton className="hamburger"><MenuIcon/></IconButton>
      </div>
      <Divider sx={{ background: "#303030" }} />
    </NavbarContainer>
  );
}
