import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../../Utils/UseOnScreen";
import { AboutSectionContainer } from "./style";
import Slide from "@mui/material/Slide";

export default function AboutSection() {
  const [startAnim, setStartAnim] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    isVisible && setStartAnim(true);
  }, [isVisible]);

  return (
    <AboutSectionContainer>
      <div className="section-body" id="about-section">
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
            <Slide direction="right" in={startAnim} timeout={500}>
              <h2>Studio</h2>
            </Slide>
            <Slide direction="left" in={startAnim} timeout={500}>
              <p >
                Meshd is a global creative studio specializing in high-end 3D
                products and CGI. We design environments for both the physical
                and virtual worlds. Our areas of expertise include digital and
                graphic design, 3D modeling, animation and renderings. We design
                concepts and solutions that stay true to our clients’ brand
                culture. Our services and products have seen several customers
                across the globe.
              </p>
            </Slide>
            <p ref={ref} style={{visibility: "hidden"}}></p>
          </div>
          {/* <div className="work-about">
            <h2>Work</h2>
            <p>
              Collaborations are at the core of our philosophy, with streamlined
              services for each client. We ensure that each new brief is set
              with business objectives and creative touch.
            </p>
          </div> */}
        </div>
      </div>
    </AboutSectionContainer>
  );
}
