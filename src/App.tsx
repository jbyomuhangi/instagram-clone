import { ThemeProvider } from "@mui/material";
import React from "react";

import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
