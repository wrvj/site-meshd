import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Divider from "@mui/material/Divider";
import "./styles/global.css";
import { createTheme, ThemeProvider } from "@mui/material";
import CustomerLoginSignup from "./pages/CustomerPrivateArea/CustomerLoginSignup";
import { AuthProvider } from "./contexts/AuthContext";
import CustomerDashboard from "./pages/CustomerPrivateArea/CustomerDashboard";
import PrivateRoute from "./pages/CustomerPrivateArea/PrivateRoute";
import PublicPages from "./pages/Router/PublicPages";
import CustomerPages from "./pages/Router/CustomerPages";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <AuthProvider>
          {/* <Navbar /> */}
          <Routes>
            <Route
              path="/customer/*"
              element={
                <PrivateRoute>
                  <CustomerPages />
                </PrivateRoute>
              }
            />
            <Route
              path="/*"
              element={<PublicPages/>}
            />

            
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
