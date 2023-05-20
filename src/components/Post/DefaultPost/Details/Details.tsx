import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";

import TextPreview from "@/components/TextPreview";
import CommentDrawer from "./CommentDrawer";
import LikeCount, { LikeCountProps } from "./LikeCount";
import PostTimestamp, { PostTimestampProps } from "./PostTimestamp";
import QuickActions from "./QuickActions";

const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
}));

const ViewAllComments = styled(Typography)(() => ({
  fontSize: "0.85rem",
  opacity: "70%",

  ":hover": {
    opacity: "50%",
  },
}));

type DetailsProps = {
  isFullPost?: boolean;
  isExtraSmallScreen?: boolean;
  caption?: string;
  commentIds?: string[];
  LikeCountProps: LikeCountProps;
  PostTimestampProps: PostTimestampProps;
  onViewFullPost?: () => void;
};

const Details: React.FC<DetailsProps> = ({
  isFullPost,
  isExtraSmallScreen,
  caption,
  commentIds = [],
  LikeCountProps,
  PostTimestampProps,
  onViewFullPost,
}) => {
  const [isCommentDrawerOpen, setIsCommentDrawerOpen] =
    useState<boolean>(false);

  const handleOpenCommentDrawer = () => {
    setIsCommentDrawerOpen(true);
  };

  const handleCloseCommentDrawer = () => {
    setIsCommentDrawerOpen(false);
  };

  const isCaptionVisible =
    caption && (!isFullPost || (isFullPost && !isExtraSmallScreen));

  const isVAllCommentsVisible =
    commentIds.length > 0 &&
    (!isFullPost || (isFullPost && !isExtraSmallScreen));

  return (
    <>
      <DetailsContainer>
        <QuickActions
          onCommentClick={isFullPost ? handleOpenCommentDrawer : onViewFullPost}
        />

        <LikeCount {...LikeCountProps} />

        {isCaptionVisible && (
          <TextPreview isExpandable lineClamp={2}>
            {caption}
          </TextPreview>
        )}

        <Box>
          {isVAllCommentsVisible && (
            <button onClick={onViewFullPost}>
              <ViewAllComments>
                View all {commentIds.length} comments
              </ViewAllComments>
            </button>
          )}

          <PostTimestamp {...PostTimestampProps} />
        </Box>
      </DetailsContainer>

      {isFullPost && (
        <CommentDrawer
          isOpen={isCommentDrawerOpen}
          commentIds={commentIds}
          onClose={handleCloseCommentDrawer}
        />
      )}
    </>
  );
};

export default Details;
