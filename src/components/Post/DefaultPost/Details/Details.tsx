import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";

import CommentDrawer from "./CommentDrawer";
import LikeCount from "./LikeCount";
import PostTimestamp from "./PostTimestamp";
import QuickActions from "./QuickActions";

const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
}));

const ViewAllComments = styled(Typography)(() => ({
  fontSize: "0.85rem",
  "&:hover": {
    opacity: "50%",
  },
}));

type DetailsProps = {
  isFullPost?: boolean;
  isExtraSmallScreen?: boolean;
  onViewFullPost?: () => void;
};

const Details: React.FC<DetailsProps> = ({
  isFullPost,
  isExtraSmallScreen,
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

  const isCaptionVisible = !isFullPost || (isFullPost && !isExtraSmallScreen);
  const isVAllCommentsVisible =
    !isFullPost || (isFullPost && !isExtraSmallScreen);

  return (
    <>
      <DetailsContainer>
        <QuickActions
          onCommentClick={isFullPost ? handleOpenCommentDrawer : onViewFullPost}
        />
        <LikeCount />

        {isCaptionVisible && <Typography>caption goes here</Typography>}

        <Box>
          {isVAllCommentsVisible && (
            <button onClick={onViewFullPost}>
              <ViewAllComments>View all 200 comments</ViewAllComments>
            </button>
          )}

          <PostTimestamp />
        </Box>
      </DetailsContainer>

      {isFullPost && (
        <CommentDrawer
          isOpen={isCommentDrawerOpen}
          onClose={handleCloseCommentDrawer}
        />
      )}
    </>
  );
};

export default Details;
