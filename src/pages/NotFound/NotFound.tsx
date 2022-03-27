import React from "react";
import { Link } from "react-router-dom";
import {styled} from "@mui/system";
import { MeshdTheme } from "../../Theme";

export default function NotFound() {
  return (
    <StyledNotFound>
      <div className="video-container">
        <video poster="/images/VideoFrame01.jpg" autoPlay muted loop>
          <source src="/videos/hero_meshd_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back to the homepage</Link>
    </StyledNotFound>
  );
}

const StyledNotFound = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  /* background-color: ${MeshdTheme.colors.black}; */
  color: ${MeshdTheme.colors.white};
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  h1 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  a {
    color: #333;
    font-size: 1.5rem;
    font-weight: 300;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  video {
    min-width: 100%;
    min-height: 100%;

    /* Setting width & height to auto prevents the browser from stretching or squishing the video */
    width: auto;
    height: auto;

    /* Center the video */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .video-container {
    z-index: -999999;

    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    height: 90vh;

    overflow: hidden;
  }
`;
