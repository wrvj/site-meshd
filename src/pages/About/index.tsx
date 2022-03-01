import React from "react";
import { AboutContainer } from "./styles";

export default function About() {
  return (
    <AboutContainer>
      <div className="content">
        <p>
          Meshd is a global creative studio specializing in high-end 3D products
          and CGI. We design environments for both the physical and virtual
          worlds. Our areas of expertise include digital and graphic design, 3D
          modeling, animation and renderings. We design concepts and solutions
          that stay true to our clients’ brand culture. Our services and
          products have seen several customers across the globe.
        </p>
        <h2>Take your perspective to another level</h2>
        <p>
          Founded by a self-taught artist-programmer with more than 15 years of
          experience and a designer with a strong background in retail,
          interiors, and fashion, Meshd is focused on bringing a fresh, unique
          approach to 3d content creation. Whether helping small companies
          realize their visions and form their own identity or participating in
          large corporate projects in collaboration with other teams, we strive
          for excellence in each one of our endeavors. Giving shape to your
          ideas is our passion.
        </p>
      </div>
    </AboutContainer>
  );
}
