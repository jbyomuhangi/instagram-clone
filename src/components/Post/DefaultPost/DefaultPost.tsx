import { Favorite } from "@mui/icons-material";
import {
  Box,
  Theme,
  Zoom,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { dataActions, selectPost, selectUser } from "@/reducers/dataReducer";
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
  position: "relative",
  backgroundColor: "black",
  minHeight: "300px",
  maxHeight: "450px",
  height: "100vh",
}));

const LikeOverlayContainer = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [likeOverlayColor, setLikeOverlayColor] = useState<
    string | undefined
  >();

  const post = useAppSelector(selectPost(postId));
  const user = useAppSelector(selectUser(post?.userId));

  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleLikePost = () => {
    if (!post) return;
    const color = post.isLiked
      ? theme.palette.common.white
      : theme.palette.like.main;

    setLikeOverlayColor(color);
    setTimeout(() => {
      setLikeOverlayColor(undefined);
    }, 500);

    dispatch(dataActions.likePost({ postId }));
  };

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

      <MediaContainer onDoubleClick={handleLikePost}>
        <img
          src={post?.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />

        <Zoom in={!!likeOverlayColor} timeout={200} unmountOnExit>
          <LikeOverlayContainer>
            <Favorite
              sx={{
                fontSize: "10rem",
                color: likeOverlayColor,
              }}
            />
          </LikeOverlayContainer>
        </Zoom>
      </MediaContainer>

      <Details
        postId={post?.id}
        isFullPost={isFullPost}
        isExtraSmallScreen={isExtraSmallScreen}
        caption={post?.caption}
        commentIds={post?.commentIds}
        createdAt={post?.createdAt}
        LikeCountProps={{ likes: post?.likes }}
        QuickActionsProps={{ postId: post?.id, isLiked: post?.isLiked }}
        onViewFullPost={() => onViewFullPost(post?.id)}
      />

      {!isExtraSmallScreen && <CommentInput postId={post?.id} />}
    </DefaultPostContainer>
  );
};

export default DefaultPost;
