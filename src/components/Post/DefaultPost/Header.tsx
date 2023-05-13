import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Box, Typography, styled } from "@mui/material";
import React from "react";

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

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <UserInfoContainer>
        <Avatar>J</Avatar>
        <Typography>username here</Typography>
      </UserInfoContainer>

      <Box>
        <MoreHorizIcon />
      </Box>
    </HeaderContainer>
  );
};

export default Header;
