import { styled } from "@mui/system";

export const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .hero {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 1440px;
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
    align-items: center;
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
    clip-path: url(#svgPath);
    -webkit-clip-path: url(#svgPath);
    top: 0;
    height: 90vh;

    overflow: hidden;
  }

  .about-section {
    width: 100%;
    margin-top: 82vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .wraper {
      display: flex;
      max-width: 1440px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }

  .mission-section {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .wraper {
      display: flex;
      flex-direction: column;
      max-width: 1440px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 3rem;
        color: whitesmoke;
      }
      h2 {
        font-size: 2rem;
        color: whitesmoke;
      }
    }
  }

  .services-section {
    z-index: -1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/images/teste_service.jpg');
    background-size: cover;
    clip-path: url(#svgPath2);
    -webkit-clip-path: url(#svgPath2);
    min-height: 90vh;


    .wraper {
      display: flex;
      max-width: 90%;
      margin: 10rem 0;
      align-items: center;
      justify-content: center;
    }
  }

  .gallery-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;

    .card-1 {
      padding: 1rem;
      background: #fafafa;
      border-radius: 15px;
      width: 100%;
      max-width: 1080px;

      margin-top: -4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 3rem;
      }
    }
  }

  .quote-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    
    .wraper {
      max-width: 1440px;
      h1{
        font-size: 3rem;
        color: tomato;
      }
    }
  }
  .contact-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    
    .wraper {
      max-width: 1440px;
      h1{
        font-size: 3rem;
        color: tomato;
      }
    }
  }
`;
