import { Box, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";

import UserAvatar from "@/components/UserAvatar";
import ExtraSmallScreenProfileSummary from "./ExtraSmallScreenProfileSummary";
import StatSummary from "./StatSummary";

const ProfileSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(10),
  padding: theme.spacing(3),
}));

const SummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const ProfileSummary: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  if (isExtraSmallScreen) return <ExtraSmallScreenProfileSummary />;

  return (
    <ProfileSummaryContainer>
      <UserAvatar sx={{ height: "150px", width: "150px" }} />

      <SummaryContainer>
        <Typography>username</Typography>

        <StatSummary />

        <Typography sx={{ fontWeight: "bold" }}>full name</Typography>
      </SummaryContainer>
    </ProfileSummaryContainer>
  );
};

export default ProfileSummary;
