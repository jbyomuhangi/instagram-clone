import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

import RelativeTimestamp from "@/components/RelativeTimestamp";
import UserAvatar from "@/components/UserAvatar";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { dataActions, selectComment, selectUser } from "@/reducers/dataReducer";

const CommentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));

const CommentBodyContainer = styled(Box)(() => ({
  flex: 1,
}));

const CommentText = styled(Typography)(() => ({
  fontSize: "0.9rem",
}));

const CommentDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

const Likes = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  color: theme.palette.text.secondary,
  fontWeight: "bold",
}));

const StyledFavorite = styled(Favorite)(({ theme }) => ({
  color: theme.palette.like.main,
  fontSize: "1rem",
}));

type CommentProps = {
  commentId: string;
};

const Comment: React.FC<CommentProps> = ({ commentId }) => {
  const dispatch = useAppDispatch();

  const comment = useAppSelector(selectComment(commentId));
  const user = useAppSelector(selectUser(comment?.userId));

  const handleLikeComment = () => {
    if (!comment) return;
    dispatch(dataActions.likeComment({ commentId: comment.id }));
  };

  return (
    <CommentContainer>
      <Box>
        <UserAvatar
          userId={user?.id}
          userName={user?.userName}
          imageSrc={user?.profilePictureImage}
          sx={{ width: "30px", height: "30px" }}
        />
      </Box>

      <CommentBodyContainer>
        <CommentText>{comment?.comment}</CommentText>

        <CommentDetails>
          <RelativeTimestamp timestamp={comment?.createdAt} />
          {comment?.likes && <Likes>{comment.likes} likes</Likes>}
        </CommentDetails>
      </CommentBodyContainer>

      <button onClick={handleLikeComment}>
        {comment?.isLiked ? (
          <StyledFavorite />
        ) : (
          <FavoriteBorderOutlined sx={{ fontSize: "1rem" }} />
        )}
      </button>
    </CommentContainer>
  );
};

export default Comment;
