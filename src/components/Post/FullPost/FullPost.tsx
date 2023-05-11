import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";
import React from "react";

import Modal from "@/components/Modal";
import FullPostContent from "./FullPostContent";

const CloseButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: 40,
  right: 50,
  zIndex: theme.zIndex.modal + 1,
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
        <CloseButton onClick={onCloseFullPost}>
          <CloseIcon sx={{ color: "white", fontSize: "2rem" }} />
        </CloseButton>
      )}
    </>
  );
};

export default FullPost;
