import React, { useState, useEffect } from "react";
import { HomeContainer } from "./styles";
import Card from "@mui/material/Card";
import ImageGallery from "../../common/Gallery";
import ServicesCarousel from "../../ServicesCarousel";
import AboutSection from "./About";
import StatementSection from "./Statement";
import QuoteForm from "../../common/QuoteForm";

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
          transform: `translate3d(0px, ${-200 + scrollPosition / 6}px, 0px)`,
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
      <section style={{display: "flex", justifyContent: "center", alignContent: "center", width: "100%", height: "auto"}}>
        <div style={{width: "1024px"}}>
          <h1 style={{textAlign: "center"}}>Like what you see?</h1>
          <h2 style={{textAlign: "center"}}>
            we will be happy to join you and your team!
          </h2>
        </div>
      </section>

      <QuoteForm/>


    </HomeContainer>
  );
}
