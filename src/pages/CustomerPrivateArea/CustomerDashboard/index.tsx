//create a simple empty react functional component
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import styled from "@emotion/styled";
import { MeshdTheme } from "../../../Theme";

export default function CustomerDashboard() {
  const { currentUser, logout }: any = useAuth();

  //console log the user data when the component is mounted
  useEffect(() => {
    //log the current user info
    console.log(currentUser);
  }, []);

  //add a logout button
  return (
    <DashboardContainer>
      <h1>Meshd Customer Dashboard</h1>
      <h3>Welcome to Meshd, {currentUser.email}</h3>
      <Button onClick={logout}>Logout</Button>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${MeshdTheme.colors.black};
  color: ${MeshdTheme.colors.white};
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
`;
