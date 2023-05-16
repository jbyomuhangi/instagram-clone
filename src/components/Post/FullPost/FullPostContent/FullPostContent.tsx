import { Theme, useMediaQuery } from "@mui/material";
import React from "react";

import DefaultPost from "@/components/Post/DefaultPost";
import FullPostContentDefault from "./FullPostContentDefault";

type FullPostContentProps = {
  postId: string;
};

const FullPostContent: React.FC<FullPostContentProps> = ({ postId }) => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  if (isExtraSmallScreen) {
    return <DefaultPost isFullPost postId={postId} />;
  }

  return <FullPostContentDefault postId={postId} />;
};

export default FullPostContent;
