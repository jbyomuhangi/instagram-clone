import { Box, Theme, styled, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import ExtraSmallAppLayout from "./ExtraSmallAppLayout";
import NavBar from "./NavBar";

const AppLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.palette.grey[100],
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
}));

const AppLayout: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  if (isExtraSmallScreen) return <ExtraSmallAppLayout />;

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
