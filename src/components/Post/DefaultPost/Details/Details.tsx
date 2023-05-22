import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";

import RelativeTimestamp from "@/components/RelativeTimestamp";
import TextPreview from "@/components/TextPreview";
import CommentDrawer from "./CommentDrawer";
import LikeCount, { LikeCountProps } from "./LikeCount";
import QuickActions from "./QuickActions";

const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
}));

const ViewAllComments = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  color: theme.palette.text.secondary,

  ":hover": {
    opacity: "50%",
  },
}));

type DetailsProps = {
  isFullPost?: boolean;
  isExtraSmallScreen?: boolean;
  caption?: string;
  commentIds?: string[];
  createdAt?: string;
  LikeCountProps: LikeCountProps;
  onViewFullPost?: () => void;
};

const Details: React.FC<DetailsProps> = ({
  isFullPost,
  isExtraSmallScreen,
  caption,
  commentIds = [],
  createdAt,
  LikeCountProps,
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

          <RelativeTimestamp timestamp={createdAt} />
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
