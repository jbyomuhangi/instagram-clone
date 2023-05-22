import { styled } from "@mui/material";
import React from "react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { selectPost } from "@/reducers/dataReducer";
import { empty } from "@/utils/noopUtils";

const MediaContainer = styled("button")(({ theme }) => ({
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.common.black,
}));

type PostItemProps = {
  postId: string;
  onOpenFullPost?: (postId?: string) => void;
};

const PostItem: React.FC<PostItemProps> = ({
  postId,
  onOpenFullPost = empty,
}) => {
  const post = useAppSelector(selectPost(postId));

  if (!post) return null;

  return (
    <>
      <MediaContainer onClick={() => onOpenFullPost(post.id)}>
        <img
          src={post.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </MediaContainer>
    </>
  );
};

export default PostItem;
