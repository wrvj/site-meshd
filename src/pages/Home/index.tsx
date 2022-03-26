import React, { useState, useEffect } from "react";
import { HomeContainer } from "./styles";
import ImageGallery from "../../common/Gallery";
import ServicesCarousel from "./ServicesCarousel";
import AboutSection from "./About";
import StatementSection from "./Statement";
import QuoteForm from "../../common/QuoteForm";
import HeroHome from "./Hero";
import ContactForm from "../../common/ContactForm";

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
            <HeroHome scrollPosition={scrollPosition} />
            {/* <section
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
          <p>By designing concepts and solutions that stay true to our clients brand culture.</p>
        </div>
      </section> */}

            <AboutSection />

            {/* Our mission and catch phrase */}
            <StatementSection />

            {/* Our services Carrousell */}
            <ServicesCarousel
                sx={{
                    transform: `translate3d(0px,  ${-300 + scrollPosition / 6}px, 0px)`,
                }}
            />

            {/* Our gallery Carrousell */}

            <ImageGallery />

            {/* Our mission and catch phrase */}
            {/* <section style={{display: "flex", justifyContent: "center", alignContent: "center", width: "100%", height: "auto"}}>
        <div style={{width: "1024px"}}>
          <h1 style={{textAlign: "center"}}>Like what you see?</h1>
          <h2 style={{textAlign: "center"}}>
            we will be happy to join you and your team!
          </h2>
        </div>
      </section> */}

            {/* <QuoteForm /> */}
            <ContactForm />
        </HomeContainer>
    );
}
