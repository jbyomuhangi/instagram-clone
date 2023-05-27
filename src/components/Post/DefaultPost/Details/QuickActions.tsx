import {
  BookmarkBorderOutlined,
  Favorite,
  FavoriteBorderOutlined,
  ModeCommentOutlined,
  SendOutlined,
} from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import React from "react";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { dataActions } from "@/reducers/dataReducer";

const QuickActionsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const RightQuickActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

const StyledFavorite = styled(Favorite)(({ theme }) => ({
  color: theme.palette.like.main,
}));

export type QuickActionsProps = {
  postId?: string;
  isLiked?: boolean;
  onCommentClick?: () => void;
};

const QuickActions: React.FC<QuickActionsProps> = ({
  postId,
  isLiked,
  onCommentClick,
}) => {
  const dispatch = useAppDispatch();

  const handleLikePost = () => {
    if (!postId) return;
    dispatch(dataActions.likePost({ postId }));
  };

  return (
    <QuickActionsContainer>
      <RightQuickActionContainer>
        <button onClick={handleLikePost}>
          {isLiked ? <StyledFavorite /> : <FavoriteBorderOutlined />}
        </button>

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
