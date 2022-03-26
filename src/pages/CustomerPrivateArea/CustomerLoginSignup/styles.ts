import styled from "@emotion/styled";
import { MeshdTheme } from "../../../Theme";


export const LoginSignupContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100vw;
    font-size: 1.5rem;
    color: #333;
    text-align: center;

    .card-form {
        padding: 2rem;
        min-width: 300px;
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(10px);
            background-color: rgba(0, 0, 0, 0.8);
        }
    }

    .link {
        color: ${MeshdTheme.colors.white};
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;        
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