import React, { useContext, useState, useEffect } from "react";

type tDashboardViews = "orders" | "profile" | "landing";

const DashboardContext = React.createContext({});

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }: any) {
  const [currentView, setCurrentView] = useState<any>("orders");

  function goTo(view: tDashboardViews) {
    view !== currentView && setCurrentView(view);
  }

  const value = {
    currentView,
    goTo,
  };


  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
