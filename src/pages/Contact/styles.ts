import styled from "@emotion/styled";
import { MeshdTheme } from "../../Theme";

export const ContactContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(${MeshdTheme.dimensions.navBarHeight} + 30px);
  width: 100%;

  .content {
    min-height: 90vh;
    width: 100%;
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
