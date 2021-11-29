import { styled } from "@mui/system";

export const HomeContainer = styled("div")`
  display: flex;
  min-height: 80vh;

  .hero {
    display: flex;
    align-items: center;
    padding: 5rem;
    font-family: "IBM Plex Sans", sans-serif;
    color: white;
    font-size: 4rem;
    line-height: 1.2;
    flex-grow: 1;
  }

  .heroContainer {
    height: 90vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  video {
    z-index: -9999;
    position: fixed;
    right: 0;
  }

  .video-container {
    position: absolute;
    bottom: 0;
    height: 100%;
  }
`;
