import React from "react";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <section className="heroContainer">
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
      <section className="first-section">
        
      </section>
    </HomeContainer>
  );
}
