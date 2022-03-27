import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./pages/CustomerPrivateArea/PrivateRoute";
import PublicPages from "./pages/Router/PublicPages";
import CustomerPages from "./pages/Router/CustomerPages";
import { DashboardProvider } from "./pages/CustomerPrivateArea/Contexts/DashboardContext";
import { MeshdMUITheme } from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={MeshdMUITheme}>
        <AuthProvider>
          <Routes>
            <Route
              path="/customer/*"
              element={
                <PrivateRoute>
                  <DashboardProvider>
                    <CustomerPages />
                  </DashboardProvider>
                </PrivateRoute>
              }
            />
            <Route path="/*" element={<PublicPages />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
