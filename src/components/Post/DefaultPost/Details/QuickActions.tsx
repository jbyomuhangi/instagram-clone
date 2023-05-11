import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, styled } from "@mui/material";
import React from "react";

const QuickActionsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const RightQuickActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

type DefaultProps = {
  onCommentClick?: () => void;
};

const QuickActions: React.FC<DefaultProps> = ({ onCommentClick }) => {
  return (
    <QuickActionsContainer>
      <RightQuickActionContainer>
        <FavoriteBorderOutlinedIcon />

        <button onClick={onCommentClick}>
          <ModeCommentOutlinedIcon />
        </button>

        <SendOutlinedIcon />
      </RightQuickActionContainer>

      <BookmarkBorderOutlinedIcon />
    </QuickActionsContainer>
  );
};

export default QuickActions;
