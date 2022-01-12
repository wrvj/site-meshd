import { styled } from "@mui/material/styles";
import { MeshdTheme } from "../Theme";

export const CardExpansivelContainer = styled("div")`
  display: flex;
  @media only screen and (max-width: ${MeshdTheme.breakpoints.tablet}) {
    flex-direction: column;
  }
  width: 100%;
  height: 850px;
  background: url('/images/teste_service.jpg');
  background-size: cover;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1000;

  .card-expansivel {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(30, 30, 30, 0.5);

    margin: 15px;
    width: 220px;
    height: 280px;
    padding: 15px;

    border-radius: 10px;

    .title-card {
      color: whitesmoke;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.5;
      text-shadow: 3px 3px 8px rgba(0,0,0,0.5);
    }
  }
  .card-expansivel-closed:hover {
    background: rgba(0, 0, 0, 0.5);
    
  }
  .card-expansivel-closed {
    .body-card {
      display: none;
    }
  }
  .card-expansivel-opened {
    width: 220px;
    height: 320px;
    background: rgba(30, 30, 30, 0.75);
    padding: 0px 24px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);

    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(18px);

    .body-card {
      p {
        margin: 0;
      }
      display: flex;
    }
  }
`;
