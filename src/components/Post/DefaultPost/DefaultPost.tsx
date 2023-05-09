import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { Box, styled, TextField, Typography } from "@mui/material";
import React from "react";

import Details from "./Details";
import Header from "./Header";

const DefaultPostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
  height: "70vh",
  minHeight: "500px",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.grey[400]}`,
}));

const CommentInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${theme.palette.grey[300]} !important`,
    },
  },

  "& .MuiInputBase-input": {
    margin: `0px ${theme.spacing(1)}`,
  },
}));

const DefaultPost: React.FC = () => {
  return (
    <DefaultPostContainer>
      <Header />

      <Box sx={{ flex: 1, backgroundColor: "black" }}>media</Box>

      <Details />

      <CommentInput
        placeholder="Add comment..."
        multiline
        maxRows={4}
        InputProps={{
          startAdornment: <SentimentSatisfiedOutlinedIcon />,
          endAdornment: <Typography>Post</Typography>,
        }}
      />
    </DefaultPostContainer>
  );
};

export default DefaultPost;
