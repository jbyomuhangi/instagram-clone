import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StatSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(5),
}));

export type StatSummaryProps = {
  postCount?: number;
  followerCount?: number;
  followingCount?: number;
};

const StatSummary: React.FC<StatSummaryProps> = ({
  postCount = 0,
  followerCount = 0,
  followingCount = 0,
}) => {
  return (
    <StatSummaryContainer>
      <Typography>
        <strong>{postCount}</strong> posts
      </Typography>
      <Typography>
        <strong>{followerCount}</strong> followers
      </Typography>
      <Typography>
        <strong>{followingCount}</strong> following
      </Typography>
    </StatSummaryContainer>
  );
};

export default StatSummary;
