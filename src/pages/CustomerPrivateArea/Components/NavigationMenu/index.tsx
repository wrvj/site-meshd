import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useAuth } from "../../../../contexts/AuthContext";
import { useDashboard } from "../../Contexts/DashboardContext";
import styled from "@mui/system/styled";
import Fade from "@mui/material/Fade";

export default function NavigationMenu({ rest }: any) {
  const { logout, currentUser }: any = useAuth();
  const { goTo }: any = useDashboard();

  return (
    <Fade in={true} timeout={1000}>
      <NavMenuCard {...rest}>
        <div className="info-navigation">
          <h2>
            Welcome to Meshd, <br /> <span>{currentUser.email}</span>
          </h2>
        </div>

        <div className="main-navigation">
          <div className="dashboard-sections">
            <Button
              onClick={() => goTo("orders")}
              fullWidth
              variant="contained"
            >
              Orders
            </Button>
            <Button
              onClick={() => goTo("profile")}
              fullWidth
              variant="contained"
            >
              Profile
            </Button>
          </div>
          <Button onClick={logout} fullWidth variant="contained" color="error">
            Logout
          </Button>
        </div>
      </NavMenuCard>
    </Fade>
  );
}

const NavMenuCard = styled(Card)`
  padding: 1rem;
  margin: 10px;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .main-navigation {
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .dashboard-sections {
      Button {
        background: ${(props) => props.theme.palette.grey["800"]};
      }
    }
  }

  h2 {
    font-size: 1.3rem;
    span {
      font-size: 0.8rem;
    }
  }

  Button {
    margin: 5px 0;
    font-weight: bold;
  }
`;
