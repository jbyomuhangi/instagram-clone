import { ThemeProvider } from "@mui/material/styles";
import React from "react";

import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>;
    </ThemeProvider>
  );
};

export default App;
