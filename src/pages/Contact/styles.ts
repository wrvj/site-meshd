import styled from "@emotion/styled";
import { MeshdTheme } from "../../Theme";

export const ContactContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${MeshdTheme.dimensions.navBarHeight};

  .content {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${MeshdTheme.colors.white};
    max-width: ${MeshdTheme.dimensions.maxColumnWidth};
    font-size: 1.5rem;
    text-align: center;
  }
`;
