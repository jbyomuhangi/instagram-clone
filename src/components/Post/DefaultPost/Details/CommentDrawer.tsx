import { Box, Drawer, styled, Typography, useTheme } from "@mui/material";
import React from "react";

import Comments from "@/components/Post/Comments";
import CommentInput from "@/components/Post/DefaultPost/CommentInput";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 2,
  ".MuiPaper-root": {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
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
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  borderBottom: `1px solid ${theme.palette.border.main}`,
}));

const CommentsSectionContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
}));

type CommentDrawerProps = {
  postId?: string;
  isOpen?: boolean;
  commentIds?: string[];
  onClose?: () => void;
};

const CommentDrawer: React.FC<CommentDrawerProps> = ({
  postId,
  isOpen,
  commentIds = [],
  onClose,
}) => {
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

        <CommentsSectionContainer>
          <Comments commentIds={commentIds} />
        </CommentsSectionContainer>

        <CommentInput postId={postId} />
      </DrawerBodyContainer>
    </StyledDrawer>
  );
};

export default CommentDrawer;
