//create a simple empty react functional component
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { styled } from "@mui/system";
import { MeshdTheme } from "../../../Theme";
import { useDashboard } from "../Contexts/DashboardContext";
import NavigationMenu from "../Components/NavigationMenu";
import OrdersTable from "../Components/OrdersTable";
import UserProfile from "../Components/UserProfile";

export default function CustomerDashboard() {
  const { currentView }: any = useDashboard();

  //console log the user data when the component is mounted
  useEffect(() => {
    //log the current user info
    console.log(currentView);
  }, [currentView]);

  //add a logout button
  return (
    <DashboardContainer>
      <NavigationMenu sx={{ gridArea: "navigation" }} />
      {currentView === "orders" && <OrdersTable />}
      {currentView === "profile" && <UserProfile/>}
    </DashboardContainer>
  );
}

const DashboardContainer = styled("div")`
  display: grid;
  grid-template-areas: "navigation content";
  grid-template-columns: 250px 4fr;
  height: 100vh;
  background: radial-gradient(
    at top left,
    ${(props) => props.theme.palette.primary.dark},
    ${(props) => props.theme.palette.primary.light}
  );
  color: ${MeshdTheme.colors.white};
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
`;
