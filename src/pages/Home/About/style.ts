import styled from "@emotion/styled";
import { MeshdTheme } from "../../../Theme";

export const AboutSectionContainer = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .main-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
  }

  .sub-content {
    display: flex;
    margin-bottom: 3rem;
    div:nth-child(1) {
      margin-right: 4rem;
    }
  }

  @media only screen and (max-width: ${MeshdTheme.breakpoints.tablet}) {
    .sub-content{
      flex-direction: column;
    }
  }

  .section-body {
    margin: -55px 1rem 0 1rem;
    color: ${MeshdTheme.colors.white};
    max-width: ${MeshdTheme.dimensions.maxColumnWidth};
    padding: 30px 60px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    background: ${MeshdTheme.colors.black};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .divider {
      height: 2px;
      width: 100%;
      margin: 1rem 0;
      background: linear-gradient(
        to right,
        ${MeshdTheme.colors.green},
        ${MeshdTheme.colors.red}
      );
    }

    .logo-about {
      max-width: 240px;
      margin: 30px;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;
