import { Favorite, ModeComment } from "@mui/icons-material";
import { Box, Typography, alpha, styled } from "@mui/material";
import React, { useState } from "react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { selectPost } from "@/reducers/dataReducer";
import { empty } from "@/utils/noopUtils";

const MediaContainer = styled("button")(({ theme }) => ({
  position: "relative",
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.common.black,
}));

const OverlayContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  backgroundColor: alpha(theme.palette.common.black, 0.5),
}));

const Stat = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.common.white,
  gap: theme.spacing(0.5),
  fontWeight: "bold",
}));

type PostItemProps = {
  postId: string;
  onOpenFullPost?: (postId?: string) => void;
};

const PostItem: React.FC<PostItemProps> = ({
  postId,
  onOpenFullPost = empty,
}) => {
  const [isOverlayShown, setIsOverlayShown] = useState<boolean>(false);

  const post = useAppSelector(selectPost(postId));

  if (!post) return null;

  return (
    <MediaContainer
      onClick={() => onOpenFullPost(post.id)}
      onMouseEnter={() => setIsOverlayShown(true)}
      onMouseLeave={() => setIsOverlayShown(false)}
    >
      <img
        src={post.image}
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />

      {isOverlayShown && (
        <OverlayContainer>
          <Stat>
            <Favorite /> {post.likes}
          </Stat>

          <Stat>
            <ModeComment />
            {post.commentIds.length}
          </Stat>
        </OverlayContainer>
      )}
    </MediaContainer>
  );
};

export default PostItem;
