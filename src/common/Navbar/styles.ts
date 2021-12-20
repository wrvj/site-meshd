import { styled } from "@mui/system";

export const NavbarContainer = styled("nav")`
  z-index: 10000;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);

  .content {
    display: flex;
    flex: initial;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.8);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.75);
    }

    .logo-and-hamburger {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
    .logoLink {
      line-height: 1;
    }
    .logo {
      width: 40px;
      height: 40px;
      margin: 12px 24px;
    }

    .hamburger {
      display: none;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      color: #eee;
      width: 0px;
      height: 0px;
      border: 2px solid #eee;
      border-radius: 8px;
      margin: 0px 24px;
      transition: width 1s;
    }
    .hamburger.hide {
      display: none;
    }

    ul {
      display: flex;

      li {
        .link {
          color: #eee;
          text-decoration: none;
          font-weight: 500;
          font-size: 18px;
          padding: 0;
        }
        margin-right: 36px;
      }
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      .hamburger {
        display: flex;
        width: 40px;
        height: 40px;
      }
      ul.closed {
        max-height: 0px;
        overflow: hidden;
        li {
          padding: 0;
        }
      }
      ul.opened {
        display: flex;
        flex-direction: column;
        max-height: 5000px;
        li {
          width: 100%;
          padding: 12px;
          text-align: center;
        }
      }
    }
  }
`;
