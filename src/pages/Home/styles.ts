import { styled } from "@mui/system";

export const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100%;

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
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
    height: 90vh;
    overflow: hidden;
  }

  .first-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;

    .card {
      border-radius: 15px;
      width: 100%;
      max-width: 1080px;
      height: 1920px;

      margin-top: -6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
