import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { Box, styled, TextField, Typography } from "@mui/material";
import React from "react";

import { empty } from "@/utils/noopUtils";
import Details from "./Details";
import Header from "./Header";

const DefaultPostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  width: "100%",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.grey[400]}`,
  backgroundColor: theme.palette.common.white,
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

const MediaContainer = styled(Box)(() => ({
  backgroundColor: "black",
  minHeight: "300px",
  maxHeight: "450px",
  height: "100vh",
}));

type RequiredProps = {
  onViewFullPost: () => void;
};

type DefaultProps = {};

const DefaultPost: React.FC<RequiredProps & DefaultProps> = ({
  onViewFullPost,
}) => {
  return (
    <DefaultPostContainer>
      <Header />

      <MediaContainer></MediaContainer>

      <Details onViewFullPost={onViewFullPost} />

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

DefaultPost.defaultProps = { onViewFullPost: empty } as DefaultProps;

export default DefaultPost;
