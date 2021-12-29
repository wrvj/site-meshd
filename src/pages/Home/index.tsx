import React, { useState, useEffect } from "react";
import { HomeContainer } from "./styles";
import Card from "@mui/material/Card";
import ImageGallery from "../../common/Gallery";
import CardInfo from "../../common/CardInfo";
import CardService from "../../common/CardService";
import Button from "@mui/material/Button";
import ServicesCarousel from "../../ServicesCarousel";
import AboutSection from "./About";
import StatementSection from "./Statement";

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
      <section
        className="heroContainer"
        style={{
          transform: `translate3d(0px, ${scrollPosition / 4}px, 0px)`,
          zIndex: -999999,
          position: "relative",
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

      <AboutSection />

      {/* Our mission and catch phrase */}
      <StatementSection />

      {/* Our services Carrousell */}
      <ServicesCarousel
        sx={{
          transform: `translate3d(0px, ${scrollPosition / 6}px, 0px)`,
        }}
      />

      {/* Our gallery Carrousell */}
      <section className="gallery-section" style={{ zIndex: 10 }}>
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
          <Card sx={{ padding: "3rem" }}>
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
          <Button variant="outlined" sx={{ width: "100%", color: "white" }}>
            Send
          </Button>
        </div>
      </section>
    </HomeContainer>
  );
}
