import { Box, styled } from "@mui/material";
import React from "react";

const AppLayoutContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: theme.palette.grey[100],
  overflow: "auto",
}));

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

export default AppLayout;
