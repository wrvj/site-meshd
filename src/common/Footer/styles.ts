import { styled } from "@mui/system";

export const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  color: #fff;
  .logo-footer {
    width: 250px;
    margin-bottom: 2rem;
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
      margin-top: 4rem;
    }
  }
`;
