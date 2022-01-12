import { styled } from "@mui/system";
import { MeshdTheme } from "../../Theme";

export const NavbarContainer = styled("nav")`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(10px);
    //background-color: rgba(0, 0, 0, 0.75);
  }
  .content {
    width: 100%;
    display: flex;
    flex: initial;
    flex-grow: 1;
    max-width: 1200px;
    align-items: center;
    justify-content: space-between;
    
    height: ${MeshdTheme.dimensions.navBarHeight};


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
        margin-right: 60px;
        .link {
          background: #fff; 
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          font-weight: 500;
          font-size: 18px;
          padding: 0;
        }

        .link:hover {
          background: linear-gradient(to right, ${MeshdTheme.colors.red}, ${MeshdTheme.colors.blue});
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    @media only screen and (max-width: ${MeshdTheme.breakpoints.tablet}) {
      flex-direction: column;
      justify-content: center;
      height: auto;
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
