import {styled} from "@mui/system";
import { MeshdTheme } from "../../Theme";

const borderRadius = "2px";

export const QuoteFormContainer = styled("section")`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 60px 0;

  .form-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
    padding: 30px 30px;
    box-sizing: border-box;
    width: 100%;
    max-width: ${MeshdTheme.dimensions.maxColumnWidth};
    color: whitesmoke;
    background: #050707;
    background-clip: padding-box;
    border: solid ${borderRadius} transparent;
    border-radius: 1em;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -${borderRadius};
      border-radius: inherit;

      background: linear-gradient(
          to right,
          ${MeshdTheme.colors.green},
        ${MeshdTheme.colors.red},
        ${MeshdTheme.colors.blue}
      );
    }

    h1 {
        font-size: 2rem;
        line-height: 1;
        margin: 2rem;
        text-align: center;
    }
    h2{
        font-size: 1.2rem;
        line-height: 1;
        margin: 0;
        font-weight: 500;
        text-align: center;
    }
  }
`;
