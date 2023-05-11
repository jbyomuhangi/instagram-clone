import CloseIcon from "@mui/icons-material/Close";
import { Box, styled } from "@mui/material";
import React from "react";

import Modal from "@/components/Modal";
import FullPostContent from "./FullPostContent";

const CloseButtonContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 40,
  right: 50,
  zIndex: theme.zIndex.modal + 10,
  cursor: "pointer",
}));

type RequiredProps = {
  isFullPostOpen: boolean;
  onCloseFullPost: () => void;
};

const FullPost: React.FC<RequiredProps> = ({
  isFullPostOpen,
  onCloseFullPost,
}) => {
  return (
    <>
      <Modal open={isFullPostOpen} onClose={onCloseFullPost}>
        <FullPostContent />
      </Modal>

      {isFullPostOpen && (
        <button onClick={onCloseFullPost}>
          <CloseButtonContainer>
            <CloseIcon sx={{ color: "white", fontSize: "2rem" }} />
          </CloseButtonContainer>
        </button>
      )}
    </>
  );
};

export default FullPost;
