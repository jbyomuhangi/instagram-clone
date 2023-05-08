import { ThemeProvider } from "@mui/material";
import React from "react";

import DefaultPost from "./components/Post/DefaultPost";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultPost />
    </ThemeProvider>
  );
};

export default App;
