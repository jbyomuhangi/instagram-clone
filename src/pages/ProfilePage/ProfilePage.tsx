import { Box, styled } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "@/hooks/reduxHooks";
import { selectUser } from "@/reducers/dataReducer";
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
  const { userId = "" } = useParams();

  const user = useAppSelector(selectUser(userId));

  return (
    <Box>
      <ProfilePageContainer>
        <ProfileContentContainer>
          <ProfileSummary />

          <ProfileBody />
        </ProfileContentContainer>
      </ProfilePageContainer>
    </Box>
  );
};

export default ProfilePage;
