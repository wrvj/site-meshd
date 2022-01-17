import { Button } from "@mui/material";
import { HeroContainer } from "./style";

interface iProps {
    scrollPosition: number;
}

export default function HeroHome(props: iProps) {
    const formQuote = document.getElementById("form-quote");
    const aboutSection = document.getElementById("about-section");
    return (
        <HeroContainer
            style={{
                transform: `translate3d(0px, ${
                    props.scrollPosition / 4
                }px, 0px)`,
                zIndex: 1,
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
                <h1>
                    Making your <br /> perspective <br />
                    <span className="shift">shift</span>
                </h1>
                <p>
                    By designing concepts and solutions that stay true to our
                    clients brand culture, Meshd takes business to the next
                    level.
                </p>
                <div className="buttons-hero">
                    <Button
                        onClick={() => {
                            formQuote?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                                inline: "nearest",
                            });
                        }}
                        variant="contained"
                    >
                        Get in touch!
                    </Button>
                    <Button
                        onClick={() => {
                            aboutSection?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                                inline: "nearest",
                            });
                        }}
                        variant="contained"
                    >
                        More info
                    </Button>
                </div>
            </div>
        </HeroContainer>
    );
}
