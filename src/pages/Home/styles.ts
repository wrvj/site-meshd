import { styled } from "@mui/system";
import { MeshdTheme } from "../../Theme";

export const HomeContainer = styled("div")`
    display: flex;
    flex-direction: column;
    min-height: 100%;

    .about-section {
        width: 100%;
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

    .services-section {
        z-index: -1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("/images/teste_service.jpg");
        background-size: cover;
        min-height: 90vh;

        .wraper {
            display: flex;
            max-width: 90%;
            margin: 10rem 0;
            align-items: center;
            justify-content: center;
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
            h1 {
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

        background: linear-gradient(#41ba91, #309a76);

        .wraper {
            max-width: 1440px;
            h1 {
                font-size: 3rem;
                color: white;
            }
        }
    }
`;
