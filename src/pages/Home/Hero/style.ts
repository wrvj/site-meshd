import styled from "@emotion/styled";
import { MeshdTheme } from "../../../Theme";
import chroma from 'chroma-js';

export const HeroContainer = styled(`section`)`
    font-family: "IBM Plex Sans", sans-serif;
    height: 90vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 3px solid red; */

    .hero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        max-width: 1160px;
        color: white;
        flex-grow: 1;
        /* border: 2px solid green; */

        h1 {
            font-size: 4.5rem;
            margin: 0;
            padding: 0;
            margin-left: 30px;
        }
        p {
            max-width: 50ch;
            padding: 0;
            font-size: 1.35rem;
            margin: 15px 30px;
            font-weight: 400;
        }

        .buttons-hero {
            margin: 15px 30px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;


            Button {
                border-radius: 8px;
                font-family: "IBM Plex Sans", sans-serif;
                font-size: 1.1rem;
                margin-right: 0;
                background: rgba(0,0,0,0.75);
                border: 2px solid ${chroma(MeshdTheme.colors.green).brighten().saturate(3).hex()};
                color: ${chroma(MeshdTheme.colors.green).brighten(1).saturate(3).hex()};
                font-weight: 500;
                
                padding: 15px 35px;
                /* text-transform: none; */
                &:nth-child(1) {
                    background: ${chroma(MeshdTheme.colors.red).brighten().saturate(5).hex()};
                    border: none;
                    color: white;
                    margin-right: 15px;
                }
                &:hover {
                    /* background: black; */
                }
            }
        }
        @media only screen and (max-width: ${MeshdTheme.breakpoints.large}) {


            h1 {
                font-size: 3rem;
            }
            p {
                font-size: 1rem;
            }
            .buttons-hero {
                margin: 15px 30px;
                Button {
                    font-size: .9rem;
                }
            }
        }
        @media only screen and (max-width: ${MeshdTheme.breakpoints.tablet}) {
            align-items: center;

            h1 {
                font-size: 3rem;
                text-align: center;
                margin: 0;
            }
            p {
                font-size: 1rem;
                text-align: center;
            }
            .buttons-hero {
                margin: 15px 0px;
                justify-content: center;
                Button {
                    font-size: .9rem;
                }
            }
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
