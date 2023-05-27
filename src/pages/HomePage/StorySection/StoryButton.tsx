import { Box, styled, useTheme } from "@mui/material";
import React from "react";

import TextPreview from "@/components/TextPreview";
import UserAvatar from "@/components/UserAvatar";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectUser } from "@/reducers/dataReducer";

const UserIconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  alignItems: "center",
}));

type StoryButtonProps = {
  userId?: string;
};

const StoryButton: React.FC<StoryButtonProps> = ({ userId }) => {
  const theme = useTheme();
  const user = useAppSelector(selectUser(userId));

  return (
    <UserIconContainer>
      <UserAvatar
        imageSrc={user?.profilePictureImage}
        userName={user?.userName}
        sx={{
          border: `2px solid transparent`,
          height: "56px",
          width: "56px",
          background: `linear-gradient(${theme.palette.grey[500]}, ${theme.palette.grey[400]}) padding-box, linear-gradient(225deg, ${theme.palette.primaryGradient.from}, ${theme.palette.primaryGradient.to}) border-box`,
        }}
      />

      <TextPreview
        sx={{ fontSize: "0.85rem", width: "70px", textAlign: "center" }}
      >
        {user?.userName}
      </TextPreview>
    </UserIconContainer>
  );
};

export default StoryButton;
