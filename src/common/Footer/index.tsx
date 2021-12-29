import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-top-divider"></div>
      <Link to="/">
        <img
          className="logo-footer"
          src="/images/logo_horizontal.svg"
          alt="Logo"
        />
      </Link>

      <ul className="nav-footer">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
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
        <li>
          <Link className="link" to="/terms">
            Terms and Conditions
          </Link>
        </li>
      </ul>
      <p>2018 Meshd, LLC. All Rights Reserved.</p>
    </FooterContainer>
  );
}
