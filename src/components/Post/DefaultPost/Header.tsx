import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, styled } from "@mui/material";
import React from "react";

import TextPreview from "@/components/TextPreview";
import UserAvatar from "@/components/UserAvatar";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.border.main}`,
}));

const UserInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));

type HeaderProps = {
  userName: string;
};

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <HeaderContainer>
      <UserInfoContainer>
        <UserAvatar userName={userName} />

        <TextPreview>{userName}</TextPreview>
      </UserInfoContainer>

      <Box>
        <MoreHorizIcon />
      </Box>
    </HeaderContainer>
  );
};

export default Header;
