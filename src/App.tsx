import { ThemeProvider } from "@mui/material";
import React from "react";

import AppLayout from "./components/Layouts/AppLayout";
import Home from "./components/Pages/Home";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Home />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
