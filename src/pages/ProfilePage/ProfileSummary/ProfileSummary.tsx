import { Box, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";

import UserAvatar, { UserAvatarProps } from "@/components/UserAvatar";
import ExtraSmallScreenProfileSummary from "./ExtraSmallScreenProfileSummary";
import StatSummary, { StatSummaryProps } from "./StatSummary";

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

type ProfileSummaryProps = {
  userName?: string;
  fullName?: string;
  UserAvatarProps?: UserAvatarProps;
  StatSummaryProps?: StatSummaryProps;
};

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  userName,
  fullName,
  UserAvatarProps = {},
  StatSummaryProps,
}) => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { sx, ...otherUserAvatarProps } = UserAvatarProps;

  if (isExtraSmallScreen)
    return (
      <ExtraSmallScreenProfileSummary
        userName={userName}
        fullName={fullName}
        UserAvatarProps={UserAvatarProps}
      />
    );

  return (
    <ProfileSummaryContainer>
      <UserAvatar
        sx={{ height: "150px", width: "150px", ...sx }}
        {...otherUserAvatarProps}
      />

      <SummaryContainer>
        <Typography>{userName}</Typography>

        <StatSummary {...StatSummaryProps} />

        <Typography sx={{ fontWeight: "bold" }}>{fullName}</Typography>
      </SummaryContainer>
    </ProfileSummaryContainer>
  );
};

export default ProfileSummary;
