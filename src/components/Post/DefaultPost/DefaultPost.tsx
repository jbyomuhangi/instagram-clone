import { Box, Theme, styled, useMediaQuery } from "@mui/material";
import React from "react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { selectPost, selectUser } from "@/reducers/dataReducer";
import { empty } from "@/utils/noopUtils";
import CommentInput from "./CommentInput";
import Details from "./Details/Details";
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
  onViewFullPost?: (postId: string) => void;
};

const DefaultPost: React.FC<DefaultPostProps> = ({
  postId,
  isFullPost,
  onViewFullPost = empty,
}) => {
  const post = useAppSelector(selectPost(postId));
  const user = useAppSelector(selectUser(post.userId));

  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <DefaultPostContainer
      sx={{ ...(isFullPost && { width: "80vw", border: "unset" }) }}
    >
      <Header userName={user.userName} />

      <MediaContainer>
        <img
          src={post.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </MediaContainer>

      <Details
        isFullPost={isFullPost}
        isExtraSmallScreen={isExtraSmallScreen}
        caption={post.caption}
        LikeCountProps={{ likes: post.likes }}
        PostTimestampProps={{ createdAt: post.createdAt }}
        onViewFullPost={() => onViewFullPost(post.id)}
      />

      {!isExtraSmallScreen && <CommentInput />}
    </DefaultPostContainer>
  );
};

export default DefaultPost;
