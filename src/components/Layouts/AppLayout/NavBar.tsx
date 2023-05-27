import {
  Home,
  HomeOutlined,
  Instagram,
  MenuOutlined,
} from "@mui/icons-material";
import { Box, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  { name: "Home", IconNormal: HomeOutlined, IconSelected: Home, route: "/" },
];

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const handlePageClick = (route: string) => {
    navigate(route);
  };

  return (
    <NavBarContainer>
      <LogoContainer>
        <Instagram sx={{ fontSize: "2rem" }} />

        {!isExtraSmallScreen && (
          <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            Instagram
          </Typography>
        )}
      </LogoContainer>

      <ButtonsContainer>
        {pageIcons.map((icon) => {
          const { name, IconNormal, route } = icon;

          return (
            <ButtonContainer key={name} onClick={() => handlePageClick(route)}>
              <IconNormal sx={{ fontSize: "1.5rem" }} />
              {!isExtraSmallScreen && (
                <Typography sx={{ fontSize: "1rem" }}>{name}</Typography>
              )}
            </ButtonContainer>
          );
        })}
      </ButtonsContainer>

      <ButtonContainer>
        <MenuOutlined sx={{ fontSize: "1.5rem" }} />
        {!isExtraSmallScreen && (
          <Typography sx={{ fontSize: "1rem" }}>More</Typography>
        )}
      </ButtonContainer>
    </NavBarContainer>
  );
};

export default NavBar;
