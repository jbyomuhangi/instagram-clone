import {
  Home,
  HomeOutlined,
  Instagram,
  MenuOutlined,
} from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import React from "react";

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

type NavBarProps = {
  onCheckIsActiveLocation: (route: string) => boolean;
  onPageClick: (route: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({
  onCheckIsActiveLocation,
  onPageClick,
}) => {
  const user = useAppSelector(selectMe);

  return (
    <NavBarContainer>
      <LogoContainer>
        <NavBarButton
          label="Instagram"
          IconRenderer={() => <Instagram sx={{ fontSize: "2rem" }} />}
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
              IconRenderer={() => <IconRenderer sx={{ fontSize: "1.5rem" }} />}
              onClick={() => onPageClick(route)}
            />
          );
        })}

        <NavBarButton
          label="Profile"
          IconRenderer={() => (
            <UserAvatar
              userName={user?.userName}
              imageSrc={user?.profilePictureImage}
              sx={{ height: "1.5rem", width: "1.5rem" }}
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
