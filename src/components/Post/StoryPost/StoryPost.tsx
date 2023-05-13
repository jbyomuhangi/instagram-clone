import { FavoriteBorderOutlined, SendOutlined } from "@mui/icons-material";
import { Box, TextField, styled, useTheme } from "@mui/material";
import React from "react";

const StoryPostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "70vh",
  width: "400px",
  borderRadius: "5px",
  backgroundColor: theme.palette.common.black,
}));

const MediaContainer = styled(Box)(() => ({
  flex: 1,
}));

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(1),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  "& .MuiInputBase-root": {
    color: theme.palette.common.white,
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${theme.palette.common.white} !important`,
      borderRadius: "40px !important",
    },
  },

  "& .MuiInputBase-input": {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
}));

const StoryPost: React.FC = () => {
  const theme = useTheme();

  return (
    <StoryPostContainer>
      <MediaContainer></MediaContainer>

      <ActionsContainer>
        <StyledTextField placeholder="Reply to jbyomuhangi..." />

        <FavoriteBorderOutlined sx={{ color: theme.palette.common.white }} />

        <SendOutlined sx={{ color: theme.palette.common.white }} />
      </ActionsContainer>
    </StoryPostContainer>
  );
};

export default StoryPost;
