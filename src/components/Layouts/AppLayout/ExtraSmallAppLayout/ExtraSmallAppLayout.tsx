import { Home, HomeOutlined } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ExtraSmallAppLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: theme.palette.grey[100],
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.border.main}`,
  padding: theme.spacing(1),
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  bottom: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.border.main}`,
  padding: theme.spacing(1),
}));

const ButtonContainer = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
  padding: `${theme.spacing(1)}`,
  justifyContent: "center",
  ":hover": {
    backgroundColor: theme.palette.grey[100],
  },
}));

const pageIcons = [
  { name: "Home", IconNormal: HomeOutlined, IconActive: Home, route: "/" },
];

const ExtraSmallAppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageClick = (route: string) => {
    navigate(route);
  };

  const checkIsActiveLocation = (route: string): boolean => {
    /* Special handling for home route */
    if (route === "/") return location.pathname === route;
    return location.pathname.startsWith(route);
  };

  return (
    <ExtraSmallAppLayoutContainer>
      <HeaderContainer>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          Instagram
        </Typography>
      </HeaderContainer>

      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <FooterContainer>
        {pageIcons.map((icon) => {
          const { name, route, IconNormal, IconActive } = icon;
          const isActive = checkIsActiveLocation(route);
          const IconRenderer = isActive ? IconActive : IconNormal;

          return (
            <ButtonContainer key={name} onClick={() => handlePageClick(route)}>
              <IconRenderer sx={{ fontSize: "1.5rem" }} />
            </ButtonContainer>
          );
        })}
      </FooterContainer>
    </ExtraSmallAppLayoutContainer>
  );
};

export default ExtraSmallAppLayout;
