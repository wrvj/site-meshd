import React, { useState, useEffect } from "react";
import { HomeContainer } from "./styles";
import Card from "@mui/material/Card";
import ImageGallery from "../../common/Gallery";
import CardInfo from "../../common/CardInfo";
import CardService from "../../common/CardService";
import Button from "@mui/material/Button";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <HomeContainer>
      <svg viewBox="0 0 1 1" width="0" height="0">
        <defs>
          <clipPath id="svgPath" clipPathUnits="objectBoundingBox">
            <path
              fill="#ffffff"
              // d="M-.5-.5v1a3.75,3.75,0,0,1,.5,0A3.75,3.75,0,0,1,.5.5v-1Z"
              d="M0,0V.92S0,1,.5,1,1,.92,1,.92V0Z"
              transform="scale (1 1) translate(0 0)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg viewBox="0 0 1 1" width="0" height="0">
        <defs>
          <clipPath id="svgPath2" clipPathUnits="objectBoundingBox">
            <path
              fill="#ffffff"
              d="M.5.08C0,.08,0,0,0,0V1S0,.92.5.92,1,1,1,1V0S1,.08.5.08Z"
              transform="scale (1 1) translate(0 0)"
            />
          </clipPath>
        </defs>
      </svg>

      <section
        className="heroContainer"
        style={{
          transform: `translate3d(0px, ${scrollPosition / 4}px, 0px)`,
          zIndex: -999999,
          position: "absolute",
        }}
      >
        <div className="video-container">
          <video poster="/images/VideoFrame01.jpg" autoPlay muted loop>
            <source src="/videos/hero_meshd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hero ">
          <h2>
            Making your <br /> perspective <span>shift</span>
          </h2>
        </div>
      </section>

      {/* Intro about us */}
      <section className="about-section">
        <div className="wraper">
          <CardInfo
            title="Agency"
            body="Meshd is a global creative studio specializing in high-end 3D products and CGI. We combined the best people with disruptive creation and technical solutions for visual content with the highest quality. Over the past few years, we have mastered the right blend of 3D Art, Design, and Technology. Our services and products have seen several customers across the globe that are looking to launch their products at a rapid pace caliber."
            button="More"
          />
          <CardInfo
            title="Work"
            body="Meshd is a global creative studio specializing in high-end 3D products and CGI. We combined the best people with disruptive creation and technical solutions for visual content with the highest quality. Over the past few years, we have mastered the right blend of 3D Art, Design, and Technology. Our services and products have seen several customers across the globe that are looking to launch their products at a rapid pace caliber."
            button="More"
          />
        </div>
      </section>

      {/* Our mission and catch phrase */}
      <section className="mission-section">
        <div className="wraper">
          <h1 className="mission-title">What is our vision?</h1>
          <h2 className="mission-slug">we yada yada yada...</h2>
        </div>
      </section>

      {/* Our services Carrousell */}
      <section
        className="services-section"
        style={{
          transform: `translate3d(0px, ${-200 + scrollPosition / 6}px, 0px)`,
        }}
      >
        <div className="wraper">
          <CardService
            title="Product Viz/ Digital Prototyping"
            body="Digital Prototyping gives conceptual design, engineering, manufacturing, and sales and marketing departments the ability to virtually explore a complete product before it's built."
            button="More"
          />
          <CardService
            title="Architecture Viz"
            body="Architectural visualization is the process of creating digital models of structures, buildings, and spaces using complex modelling methods and powerful rendering computers."
            button="More"
          />
          <CardService
            title="Game Assets"
            body="Game assets include everything that can go into a game, including 3D models, sprites, sound effects, music, code snippets and modules. At Meshed, we create stunning 3D models for your game."
            button="More"
          />
          <CardService
            title="3D Printing / Laser Cutting"
            body="3D printing is a process of making three dimensional solid objects from a digital file. Meanwhile, laser cutting is a technology that uses a laser to vaporize materials, resulting in a cut edge. Let Meshd be your individual FabLab."
            button="More"
          />
          <CardService
            title="CGI and Animation"
            body="3D animation and CGI is the art of using computer generated graphics to bring characters, vehicles, props, and more to life within TV shows, films, and games. Meshd provides you the resources needed to bring your projects to life!"
            button="More"
          />
        </div>
      </section>

      {/* Our gallery Carrousell */}
      <section className="gallery-section">
        <Card className="card-1">
          <h1>See some more of our projects</h1>
          <ImageGallery />
        </Card>
      </section>

      {/* Our mission and catch phrase */}
      <section className="mission-section">
        <div className="wraper">
          <h1 className="mission-title">Like what you see?</h1>
          <h2 className="mission-slug">
            we will be happy to join you and your team in blablabla
          </h2>
        </div>
      </section>

      {/* Our Quote contact form */}
      <section className="quote-section">
        <div className="wraper">
          <Card sx={{padding: "3rem"}}>
            <h1>Get a quote now!</h1>
            <h2>Formulario de orçamento</h2>
            <h2>Formulario de orçamento</h2>
            <h2>Formulario de orçamento</h2>
            <h2>Formulario de orçamento</h2>
            <h2>Formulario de orçamento</h2>
            <Button variant="contained" sx={{ width: "100%" }}>
              Send
            </Button>
          </Card>
        </div>
      </section>

      {/* Our general contact form */}
      <section className="contact-section">
        <div className="wraper">
          <h1>
            Or send us a message,
            <br /> we will get in touch soon!
          </h1>
          <h2>Formulario de contato</h2>
          <h2>Formulario de contato</h2>
          <h2>Formulario de contato</h2>
          <h2>Formulario de contato</h2>
          <h2>Formulario de contato</h2>
          <Button variant="contained" sx={{ width: "100%" }}>
            Send
          </Button>
        </div>
      </section>
    </HomeContainer>
  );
}
