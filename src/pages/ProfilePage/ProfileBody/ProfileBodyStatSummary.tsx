import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StatSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.palette.border.main}`,
  padding: theme.spacing(1),
  gap: theme.spacing(1),
}));

const StatContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
}));

const CountText = styled(Typography)(() => ({
  fontWeight: "bold",
}));

const LabelText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export type ProfileBodyStatSummaryProps = {
  postCount?: number;
  followerCount?: number;
  followingCount?: number;
};

const ProfileBodyStatSummary: React.FC<ProfileBodyStatSummaryProps> = ({
  postCount = 0,
  followerCount = 0,
  followingCount = 0,
}) => {
  return (
    <StatSummaryContainer>
      <StatContainer>
        <CountText>{postCount}</CountText>
        <LabelText>posts</LabelText>
      </StatContainer>

      <StatContainer>
        <CountText>{followerCount}</CountText>
        <LabelText>followers</LabelText>
      </StatContainer>

      <StatContainer>
        <CountText>{followingCount}</CountText>
        <LabelText>following</LabelText>
      </StatContainer>
    </StatSummaryContainer>
  );
};

export default ProfileBodyStatSummary;
