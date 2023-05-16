import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";

import AppLayout from "./components/Layouts/AppLayout";
import Home from "./pages/Home";
import store from "./store";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Home />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
