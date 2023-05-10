import { Box, Typography, styled } from "@mui/material";
import React from "react";

import LikeCount from "./LikeCount";
import PostTimestamp from "./PostTimestamp";
import QuickActions from "./QuickActions";

const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
}));

const ViewAllComments = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  "&:hover": {
    opacity: "50%",
  },
}));

type RequiredProps = {};

type DefaultProps = {
  onViewFullPost?: () => void;
  isFullPost?: boolean;
  isExtraSmallScreen?: boolean;
};

const Details: React.FC<RequiredProps & DefaultProps> = ({
  isFullPost,
  isExtraSmallScreen,
  onViewFullPost,
}) => {
  const isCaptionVisible = !isFullPost || (isFullPost && !isExtraSmallScreen);
  const isVAllCommentsVisible =
    !isFullPost || (isFullPost && !isExtraSmallScreen);

  return (
    <DetailsContainer>
      <QuickActions />
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
  );
};

Details.defaultProps = {} as DefaultProps;

export default Details;
