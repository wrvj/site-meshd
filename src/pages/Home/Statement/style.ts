import styled from "@emotion/styled";
import { MeshdTheme } from "../../../Theme";

export const StatementSectionContainer = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem 30px 15rem 30px;


  .wraper {
    display: flex;
    flex-direction: column;
    max-width: ${MeshdTheme.dimensions.maxColumnWidth};
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
      color: whitesmoke;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      color: whitesmoke;
      text-align: center;
    }
    p {
        font-size: 1.3rem;
        line-height: 1.5;
        color: ${MeshdTheme.colors.white};
    }
  }
`;
