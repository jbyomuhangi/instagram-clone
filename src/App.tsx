import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./components/Layouts/AppLayout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import store from "./store";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
