import { Button } from "@mui/material";
import { HeroContainer } from "./style";
import Zoom from "@mui/material/Zoom";

interface iProps {
  scrollPosition: number;
}

const animTimeout = 400;
export default function HeroHome(props: iProps) {
  return (
    <HeroContainer
      style={{
        transform: `translate3d(0px, ${props.scrollPosition / 4}px, 0px)`,
        zIndex: 1,
        position: "relative",
      }}
    >
      <div className="video-container">
        <video poster="/images/VideoFrame01.jpg" autoPlay muted loop>
          <source src="/videos/hero_meshd_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero ">
        <h1>
          Making your <br /> perspective <br />
          <span className="shift">shift</span>
        </h1>
        <p>
          By designing concepts and solutions that stay true to our clients
          brand culture, Meshd takes business to the next level.
        </p>
        <div className="buttons-hero">
          <Zoom in={true} timeout={animTimeout}>
            <Button
              onClick={() => {
                console.log("here");
                document.getElementById("form-contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }}
              variant="contained"
            >
              Get in touch!
            </Button>
          </Zoom>
          <Zoom
            in={true}
            timeout={animTimeout}
            style={{ transitionDelay: `${animTimeout}ms` }}
          >
            <Button
              onClick={() => {
                document.getElementById("about-section")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }}
              variant="contained"
            >
              More info
            </Button>
          </Zoom>
        </div>
      </div>
    </HeroContainer>
  );
}
