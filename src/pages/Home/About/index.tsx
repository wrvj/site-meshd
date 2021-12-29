import React from "react";
import { AboutSectionContainer } from "./style";

export default function AboutSection() {
  return (
    <AboutSectionContainer>
      <div className="section-body">
        <div className="main-content">
          <img
            className="logo-about"
            src="/images/Logotipo_Horizontal_Degrade_FundoEscuro_Azul.svg"
            alt="Logo"
          />
        </div>
        <div className="divider"></div>
        <div className="sub-content">
          <div className="studio-about">
            <h2>Studio</h2>
            <p>
              Meshd is a global creative studio specializing in high-end 3D
              products and CGI. Our services and products have seen several
              customers across the globe.
            </p>
          </div>
          <div className="work-about">
            <h2>Work</h2>
            <p>
              Collaborations are at the core of our philosophy, with streamlined
              services for each client. We ensure that each new brief is set
              with business objectives and creative touch.
            </p>
          </div>
        </div>
      </div>
    </AboutSectionContainer>
  );
}
