import {
  Home,
  HomeOutlined,
  Instagram,
  MenuOutlined,
} from "@mui/icons-material";
import { Box, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBarContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  width: "250px",
  gap: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2),
  top: 0,
  border: `1px solid ${theme.palette.border.main}`,

  [theme.breakpoints.down("md")]: {
    width: "fit-content",
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const ButtonContainer = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  width: "100%",
  borderRadius: "10px",
  padding: `${theme.spacing(1)} 0px`,
  ":hover": {
    backgroundColor: theme.palette.grey[100],
  },

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const pageIcons = [
  { name: "Home", IconNormal: HomeOutlined, IconActive: Home, route: "/" },
];

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const handlePageClick = (route: string) => {
    navigate(route);
  };

  const checkIsActiveLocation = (route: string): boolean => {
    /* Special handling for home route */
    if (route === "/") return location.pathname === route;
    return location.pathname.startsWith(route);
  };

  return (
    <NavBarContainer>
      <LogoContainer>
        <Instagram sx={{ fontSize: "2rem" }} />

        {!isSmallScreen && (
          <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            Instagram
          </Typography>
        )}
      </LogoContainer>

      <ButtonsContainer>
        {pageIcons.map((icon) => {
          const { name, route, IconNormal, IconActive } = icon;
          const isActive = checkIsActiveLocation(route);
          const IconRenderer = isActive ? IconActive : IconNormal;

          return (
            <ButtonContainer key={name} onClick={() => handlePageClick(route)}>
              <IconRenderer sx={{ fontSize: "1.5rem" }} />
              {!isSmallScreen && (
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: isActive ? "bold" : "unset",
                  }}
                >
                  {name}
                </Typography>
              )}
            </ButtonContainer>
          );
        })}
      </ButtonsContainer>

      <ButtonContainer>
        <MenuOutlined sx={{ fontSize: "1.5rem" }} />
        {!isSmallScreen && (
          <Typography sx={{ fontSize: "1rem" }}>More</Typography>
        )}
      </ButtonContainer>
    </NavBarContainer>
  );
};

export default NavBar;
