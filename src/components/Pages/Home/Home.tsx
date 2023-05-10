import CloseIcon from "@mui/icons-material/Close";
import { Box, styled, useTheme } from "@mui/material";
import React, { useState } from "react";

import Modal from "@/components/Modal";
import DefaultPost from "@/components/Post/DefaultPost";
import FullPost from "@/components/Post/FullPost";

const HomeContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: `${theme.spacing(3)} 0px`,
  overflow: "auto",
}));

const CloseButtonContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 40,
  right: 50,
  zIndex: theme.zIndex.modal + 10,
  cursor: "pointer",
}));

const Home: React.FC = () => {
  const [isFullPostOpen, setIsFullPostOpen] = useState<boolean>(false);

  const handleOpenFullPost = () => {
    setIsFullPostOpen(true);
  };

  const handleCloseFullPost = () => {
    setIsFullPostOpen(false);
  };

  return (
    <HomeContainer>
      {[1, 2, 3, 4, 5].map((num) => {
        return <DefaultPost key={num} onViewFullPost={handleOpenFullPost} />;
      })}

      <Modal open={isFullPostOpen} onClose={handleCloseFullPost}>
        <FullPost />
      </Modal>

      {isFullPostOpen && (
        <button onClick={handleCloseFullPost}>
          <CloseButtonContainer>
            <CloseIcon sx={{ color: "white", fontSize: "2rem" }} />
          </CloseButtonContainer>
        </button>
      )}
    </HomeContainer>
  );
};

export default Home;
