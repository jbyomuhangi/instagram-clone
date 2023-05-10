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
  cursor: "pointer",
  "&:hover": {
    opacity: "50%",
  },
}));

type RequiredProps = {
  onViewFullPost: () => void;
};

type DefaultProps = {};

const Details: React.FC<RequiredProps & DefaultProps> = ({
  onViewFullPost,
}) => {
  return (
    <DetailsContainer>
      <QuickActions />
      <LikeCount />
      <Typography>caption goes here</Typography>

      <Box>
        <ViewAllComments onClick={onViewFullPost}>
          View all 200 comments
        </ViewAllComments>

        <PostTimestamp />
      </Box>
    </DetailsContainer>
  );
};

Details.defaultProps = {} as DefaultProps;

export default Details;
