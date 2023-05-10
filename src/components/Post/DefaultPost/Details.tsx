import { Box, Typography, styled } from "@mui/material";
import React from "react";

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
      <Typography sx={{ fontWeight: "bold" }}>300 likes</Typography>
      <Typography>caption goes here</Typography>

      <Box>
        <ViewAllComments onClick={onViewFullPost}>
          View all 200 comments
        </ViewAllComments>
        <Typography sx={{ fontSize: "0.85rem" }}>2 hours ago</Typography>
      </Box>
    </DetailsContainer>
  );
};

Details.defaultProps = {} as DefaultProps;

export default Details;
