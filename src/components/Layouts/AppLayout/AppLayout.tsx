import { Box, Theme, styled, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handlePageClick = (route: string) => {
    navigate(route);
  };

  const checkIsActiveLocation = (route: string): boolean => {
    /* Special handling for home route */
    if (route === "/") return location.pathname === route;
    return location.pathname.startsWith(route);
  };

  if (isExtraSmallScreen)
    return (
      <ExtraSmallAppLayout
        onCheckIsActiveLocation={checkIsActiveLocation}
        onPageClick={handlePageClick}
      />
    );

  return (
    <AppLayoutContainer>
      <NavBar
        onCheckIsActiveLocation={checkIsActiveLocation}
        onPageClick={handlePageClick}
      />

      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </AppLayoutContainer>
  );
};

export default AppLayout;
