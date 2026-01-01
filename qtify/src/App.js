import "./App.css";
import {Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { StyledEngineProvider } from "@mui/material";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <Outlet />
    </StyledEngineProvider>
  );
}

export default App;
