import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayoutContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.grey[100],
}));

const AppLayout: React.FC = () => {
  return (
    <AppLayoutContainer>
      <Outlet />
    </AppLayoutContainer>
  );
};

export default AppLayout;
