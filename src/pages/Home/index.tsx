import React, { useState, useEffect } from "react";
import { HomeContainer } from "./styles";
import Card from "@mui/material/Card";


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
          transform: `translate3d(0px, ${scrollPosition / 2}px, 0px)`,
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

      <section className="first-section" style={{ marginTop: "80vh" }}>
        <Card className="card">
          <h2>Learnd</h2>
        </Card>
      </section>
      
    </HomeContainer>
  );
}
