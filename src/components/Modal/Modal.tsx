import { Box, Modal as ModalBase, styled } from "@mui/material";
import React from "react";

const ChildrenContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  outline: "none",
  backgroundColor: theme.palette.common.white,
}));

type RequiredProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<RequiredProps> = ({ children, open, onClose }) => {
  return (
    <ModalBase open={open} onClose={onClose}>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ModalBase>
  );
};

export default Modal;
