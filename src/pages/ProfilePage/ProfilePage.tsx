import { Box, styled } from "@mui/material";
import React from "react";

import ProfileSummary from "./ProfileSummary";

const ProfilePageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const ProfileContentContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "640px",
}));

const ProfilePage: React.FC = () => {
  return (
    <ProfilePageContainer>
      <ProfileContentContainer>
        <ProfileSummary />
      </ProfileContentContainer>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
