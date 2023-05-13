import { Box, Drawer, styled, Typography, useTheme } from "@mui/material";
import React from "react";

import CommentInput from "@/components/Post/DefaultPost/CommentInput";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 2,
}));

const DrawerBodyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "70vh",
  backgroundColor: theme.palette.common.white,
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.border.main}`,
}));

const CommentsContainer = styled(Box)(() => ({
  flex: 1,
}));

type DefaultProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const CommentDrawer: React.FC<DefaultProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();

  return (
    <StyledDrawer anchor="bottom" open={isOpen} onClose={onClose}>
      <DrawerBodyContainer>
        <HeaderContainer>
          <Typography>Comments</Typography>

          <button onClick={onClose}>
            <Typography sx={{ color: theme.palette.link.main }}>
              Close
            </Typography>
          </button>
        </HeaderContainer>

        <CommentsContainer></CommentsContainer>

        <CommentInput />
      </DrawerBodyContainer>
    </StyledDrawer>
  );
};

export default CommentDrawer;
