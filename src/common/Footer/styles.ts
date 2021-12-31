import { styled } from "@mui/system";
import { MeshdTheme } from "../../Theme";

export const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 6rem 0; */
  color: #fff;

  .footer-top-divider {
    height: 4px;
    width: 100%;
    background: linear-gradient(to right, ${MeshdTheme.colors.green}, ${MeshdTheme.colors.red}, ${MeshdTheme.colors.blue})
  }
  .logo-footer {
    width: 250px;
    margin: 3rem;
  }
  .nav-footer {
    display: flex;
    li {
      .link {
        color: #bbb;
        text-decoration: none;
        font-weight: 400;
        font-size: 18px;
        padding: 0;
      }
      margin: 0px 36px;
    }
  }

  p {
    margin: 5rem;
  }
`;
