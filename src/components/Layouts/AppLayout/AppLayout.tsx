import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const AppLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.palette.grey[100],
}));

const ContentContainer = styled(Box)(() => ({
  flex: 1,
}));

const AppLayout: React.FC = () => {
  return (
    <AppLayoutContainer>
      <NavBar />

      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </AppLayoutContainer>
  );
};

export default AppLayout;
