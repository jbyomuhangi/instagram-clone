import { Box, Theme, styled, useMediaQuery } from "@mui/material";
import React from "react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { selectPost, selectUser } from "@/reducers/dataReducer";
import { empty } from "@/utils/noopUtils";
import CommentInput from "./CommentInput";
import Details from "./Details";
import Header from "./Header";

const DefaultPostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  width: "100%",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.border.main}`,
  backgroundColor: theme.palette.common.white,
}));

const MediaContainer = styled(Box)(() => ({
  backgroundColor: "black",
  minHeight: "300px",
  maxHeight: "450px",
  height: "100vh",
}));

type DefaultPostProps = {
  postId: string;
  isFullPost?: boolean;
  onViewFullPost?: (postId?: string) => void;
};

const DefaultPost: React.FC<DefaultPostProps> = ({
  postId,
  isFullPost,
  onViewFullPost = empty,
}) => {
  const post = useAppSelector(selectPost(postId));
  const user = useAppSelector(selectUser(post?.userId));

  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <DefaultPostContainer
      sx={{ ...(isFullPost && { width: "80vw", border: "unset" }) }}
    >
      <Header
        userName={user?.userName}
        UserAvatarProps={{
          userId: user?.id,
          userName: user?.userName,
          imageSrc: user?.profilePictureImage,
        }}
      />

      <MediaContainer>
        <img
          src={post?.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </MediaContainer>

      <Details
        isFullPost={isFullPost}
        isExtraSmallScreen={isExtraSmallScreen}
        caption={post?.caption}
        commentIds={post?.commentIds}
        createdAt={post?.createdAt}
        LikeCountProps={{ likes: post?.likes }}
        QuickActionsProps={{ postId: post?.id, isLiked: post?.isLiked }}
        onViewFullPost={() => onViewFullPost(post?.id)}
      />

      {!isExtraSmallScreen && <CommentInput />}
    </DefaultPostContainer>
  );
};

export default DefaultPost;
