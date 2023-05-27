import { Home, HomeOutlined } from "@mui/icons-material";
import { Box, Typography, styled, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import NavBarButton from "@/components/Layouts/AppLayout/NavBarButton";
import UserAvatar from "@/components/UserAvatar";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectMe } from "@/reducers/dataReducer";

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

const pageIcons = [
  { name: "Home", IconNormal: HomeOutlined, IconActive: Home, route: "/" },
];

type ExtraSmallAppLayoutProps = {
  onCheckIsActiveLocation: (route: string) => boolean;
  onPageClick: (route: string) => void;
};

const ExtraSmallAppLayout: React.FC<ExtraSmallAppLayoutProps> = ({
  onCheckIsActiveLocation,
  onPageClick,
}) => {
  const theme = useTheme();
  const user = useAppSelector(selectMe);

  return (
    <ExtraSmallAppLayoutContainer>
      <HeaderContainer>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            background: `linear-gradient(${theme.palette.primaryGradient.from}, ${theme.palette.primaryGradient.to})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Instagram
        </Typography>
      </HeaderContainer>

      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <FooterContainer>
        {pageIcons.map((icon) => {
          const { name, route, IconNormal, IconActive } = icon;
          const isActive = onCheckIsActiveLocation(route);
          const IconRenderer = isActive ? IconActive : IconNormal;

          return (
            <NavBarButton
              key={name}
              IconRenderer={() => <IconRenderer sx={{ fontSize: "2rem" }} />}
              onClick={() => onPageClick(route)}
            />
          );
        })}

        <NavBarButton
          IconRenderer={() => (
            <UserAvatar
              userName={user?.userName}
              imageSrc={user?.profilePictureImage}
              sx={{ height: "2rem", width: "2rem" }}
            />
          )}
          onClick={() => onPageClick(`/profile/${user?.id || ""}`)}
        />
      </FooterContainer>
    </ExtraSmallAppLayoutContainer>
  );
};

export default ExtraSmallAppLayout;
