import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import React from "react";

import RelativeTimestamp from "@/components/RelativeTimestamp";
import UserAvatar from "@/components/UserAvatar";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectComment, selectUser } from "@/reducers/dataReducer";

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

type CommentProps = {
  commentId: string;
};

const Comment: React.FC<CommentProps> = ({ commentId }) => {
  const comment = useAppSelector(selectComment(commentId));
  const user = useAppSelector(selectUser(comment.userId));

  return (
    <CommentContainer>
      <Box>
        <UserAvatar
          userName={user.userName}
          imageSrc={user.profilePictureImage}
          sx={{ width: "30px", height: "30px" }}
        />
      </Box>

      <CommentBodyContainer>
        <CommentText>{comment.comment}</CommentText>

        <CommentDetails>
          <RelativeTimestamp timestamp={comment.createdAt} />
          <Likes>{comment.likes} likes</Likes>
        </CommentDetails>
      </CommentBodyContainer>

      <FavoriteBorderOutlined sx={{ fontSize: "1rem" }} />
    </CommentContainer>
  );
};

export default Comment;
