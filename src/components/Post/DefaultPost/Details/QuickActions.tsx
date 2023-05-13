import {
  BookmarkBorderOutlined,
  FavoriteBorderOutlined,
  ModeCommentOutlined,
  SendOutlined,
} from "@mui/icons-material";
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
        <FavoriteBorderOutlined />

        <button onClick={onCommentClick}>
          <ModeCommentOutlined />
        </button>

        <SendOutlined />
      </RightQuickActionContainer>

      <BookmarkBorderOutlined />
    </QuickActionsContainer>
  );
};

export default QuickActions;
