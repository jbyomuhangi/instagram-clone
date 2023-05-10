import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
}));

const QuickActionContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const RightQuickActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

const ViewAllComments = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  cursor: "pointer",
  "&:hover": {
    opacity: "50%",
  },
}));

type RequiredProps = {
  onViewFullPost: () => void;
};

type DefaultProps = {};

const Details: React.FC<RequiredProps & DefaultProps> = ({
  onViewFullPost,
}) => {
  return (
    <DetailsContainer>
      <QuickActionContainer>
        <RightQuickActionContainer>
          <FavoriteBorderOutlinedIcon />
          <ModeCommentOutlinedIcon />
          <SendOutlinedIcon />
        </RightQuickActionContainer>

        <BookmarkBorderOutlinedIcon />
      </QuickActionContainer>

      <Typography sx={{ fontWeight: "bold" }}>300 likes</Typography>
      <Typography>caption goes here</Typography>

      <Box>
        <ViewAllComments onClick={onViewFullPost}>
          View all 200 comments
        </ViewAllComments>
        <Typography sx={{ fontSize: "0.85rem" }}>2 hours ago</Typography>
      </Box>
    </DetailsContainer>
  );
};

Details.defaultProps = {} as DefaultProps;

export default Details;
