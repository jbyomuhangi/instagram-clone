import {
  Home,
  HomeOutlined,
  Instagram,
  MenuOutlined,
} from "@mui/icons-material";
import { Box, styled, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import UserAvatar from "@/components/UserAvatar";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectMe } from "@/reducers/dataReducer";
import NavBarButton from "./NavBarButton";

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

const pageIcons = [
  { name: "Home", IconNormal: HomeOutlined, IconActive: Home, route: "/" },
];

const InstagramIcon = () => {
  const theme = useTheme();

  return (
    <Box>
      <svg width={0} height={0}>
        <linearGradient
          id="instagramLogoLinerGradient"
          x1={1}
          y1={0}
          x2={1}
          y2={1}
        >
          <stop offset={0} stopColor={theme.palette.primaryGradient.from} />
          <stop offset={1} stopColor={theme.palette.primaryGradient.to} />
        </linearGradient>
      </svg>

      <Instagram
        sx={{
          fill: "url(#instagramLogoLinerGradient)",
          fontSize: "2rem",
        }}
      />
    </Box>
  );
};

type NavBarProps = {
  onCheckIsActiveLocation: (route: string) => boolean;
  onPageClick: (route: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({
  onCheckIsActiveLocation,
  onPageClick,
}) => {
  const location = useLocation();

  const user = useAppSelector(selectMe);

  const isViewingMyProfile = useMemo(() => {
    if (!user) return false;
    return location.pathname === `/profile/${user.id}`;
  }, [location.pathname, user]);

  return (
    <NavBarContainer>
      <LogoContainer>
        <NavBarButton
          label="Instagram"
          IconRenderer={() => <InstagramIcon />}
          TypographyProps={{ sx: { fontWeight: "bold", fontSize: "2rem" } }}
        />
      </LogoContainer>

      <ButtonsContainer>
        {pageIcons.map((icon) => {
          const { name, route, IconNormal, IconActive } = icon;
          const isActive = onCheckIsActiveLocation(route);
          const IconRenderer = isActive ? IconActive : IconNormal;

          return (
            <NavBarButton
              key={name}
              label={name}
              isActive={isActive}
              IconRenderer={() => <IconRenderer sx={{ fontSize: "2rem" }} />}
              onClick={() => onPageClick(route)}
            />
          );
        })}

        <NavBarButton
          label="Profile"
          isActive={isViewingMyProfile}
          IconRenderer={() => (
            <UserAvatar
              userName={user?.userName}
              imageSrc={user?.profilePictureImage}
              sx={{ height: "2rem", width: "2rem" }}
            />
          )}
          onClick={() => onPageClick(`/profile/${user?.id || ""}`)}
        />
      </ButtonsContainer>

      <NavBarButton
        label="More"
        IconRenderer={() => <MenuOutlined sx={{ fontSize: "1.5rem" }} />}
      />
    </NavBarContainer>
  );
};

export default NavBar;
