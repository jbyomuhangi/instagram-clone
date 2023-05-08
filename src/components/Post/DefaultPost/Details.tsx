import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const QuickActionContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const RightQuickActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

const Details: React.FC = () => {
  return (
    <DetailsContainer>
      <QuickActionContainer>
        <RightQuickActionContainer>
          <FavoriteBorderOutlinedIcon />
          <ModeCommentOutlinedIcon />
          <SendOutlinedIcon />
        </RightQuickActionContainer>

        <BookmarkBorderOutlinedIcon />
      </QuickActionContainer>

      <Typography sx={{ fontWeight: "bold" }}>300 likes</Typography>
      <Typography>caption goes here</Typography>
    </DetailsContainer>
  );
};

export default Details;
