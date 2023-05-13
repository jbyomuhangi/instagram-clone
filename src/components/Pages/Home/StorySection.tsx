import { Box, styled } from "@mui/material";
import React, { useState } from "react";

import Modal from "@/components/Modal";
import StoryPost from "@/components/Post/StoryPost";
import TextPreview from "@/components/TextPreview";
import UserAvatar from "@/components/UserAvatar";

const StorySectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "400px",
  gap: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: "5px",
  padding: theme.spacing(1),
  overflow: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
}));

const UserIconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  alignItems: "center",
}));

const StorySection: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState<boolean>(false);

  const handleOpenStoryPost = () => {
    setIsStoryModalOpen(true);
  };

  const handleCloseStoryPost = () => {
    setIsStoryModalOpen(false);
  };

  return (
    <StorySectionContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
        return (
          <UserIconContainer key={num}>
            <button onClick={handleOpenStoryPost}>
              <UserAvatar />
            </button>

            <TextPreview sx={{ fontSize: "0.85rem", width: "70px" }}>
              Jbyomuhangi
            </TextPreview>
          </UserIconContainer>
        );
      })}

      <Modal open={isStoryModalOpen} onClose={handleCloseStoryPost}>
        <StoryPost />
      </Modal>
    </StorySectionContainer>
  );
};

export default StorySection;
