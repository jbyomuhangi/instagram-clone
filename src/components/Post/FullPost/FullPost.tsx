import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";
import React from "react";

import Modal from "@/components/Modal";
import FullPostContent from "./FullPostContent/FullPostContent";

const CloseButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: 40,
  right: 50,
  zIndex: theme.zIndex.modal + 1,
}));

type FullPostProps = {
  postId?: string;
  onCloseFullPost: () => void;
};

const FullPost: React.FC<FullPostProps> = ({ postId, onCloseFullPost }) => {
  if (!postId) return null;

  return (
    <>
      <Modal open onClose={onCloseFullPost}>
        <FullPostContent postId={postId} />
      </Modal>

      <CloseButton onClick={onCloseFullPost}>
        <CloseIcon sx={{ color: "white", fontSize: "2rem" }} />
      </CloseButton>
    </>
  );
};

export default FullPost;
