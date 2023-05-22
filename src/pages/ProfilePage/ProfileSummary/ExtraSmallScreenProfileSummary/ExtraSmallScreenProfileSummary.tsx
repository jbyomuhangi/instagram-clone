import { Box, styled, Typography } from "@mui/material";
import React from "react";

import UserAvatar, { UserAvatarProps } from "@/components/UserAvatar";

const ExtraSmallScreenProfileSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(3),
}));

const SummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

type ProfileSummaryProps = {
  userName?: string;
  fullName?: string;
  UserAvatarProps?: UserAvatarProps;
};

const ExtraSmallScreenProfileSummary: React.FC<ProfileSummaryProps> = ({
  userName,
  fullName,
  UserAvatarProps = {},
}) => {
  const { sx, ...otherUserAvatarProps } = UserAvatarProps;

  return (
    <ExtraSmallScreenProfileSummaryContainer>
      <SummaryContainer>
        <UserAvatar
          sx={{ height: "75px", width: "75px", ...sx }}
          {...otherUserAvatarProps}
        />
        <Typography>{userName}</Typography>
      </SummaryContainer>

      <Typography sx={{ fontWeight: "bold" }}>{fullName}</Typography>
    </ExtraSmallScreenProfileSummaryContainer>
  );
};

export default ExtraSmallScreenProfileSummary;
