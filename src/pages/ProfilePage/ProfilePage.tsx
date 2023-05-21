import { Box, styled } from "@mui/material";
import React from "react";

import ProfileBody from "./ProfileBody";
import ProfileSummary from "./ProfileSummary";

const ProfilePageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const ProfileContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "640px",
  padding: `${theme.spacing(2)} 0px`,
}));

const ProfilePage: React.FC = () => {
  return (
    <ProfilePageContainer>
      <ProfileContentContainer>
        <ProfileSummary />

        <ProfileBody />
      </ProfileContentContainer>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
