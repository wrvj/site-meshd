import {styled} from "@mui/system";
import { MeshdTheme } from "../../Theme";

export const GalleryContainer = styled("section")`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .gallery-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 10;
        max-width: ${MeshdTheme.dimensions.maxColumnWidth};
        background: ${MeshdTheme.colors.black};
        border-radius: 15px;

        h1 {
            color: whitesmoke;
            margin: 60px;
            font-size: 3rem;
            text-align: center
        }
    }

    @media only screen and (max-width: ${MeshdTheme.breakpoints.tablet}) {
        .gallery-container {
            border-radius: 0;
        }
    }
`;
