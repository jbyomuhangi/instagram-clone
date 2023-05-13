import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { styled, TextField, Typography, useTheme } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: `1px solid ${theme.palette.border.main} !important`,
    },
  },

  "& .MuiInputBase-input": {
    margin: `0px ${theme.spacing(1)}`,
  },
}));

const CommentInput: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledTextField
      placeholder="Add comment..."
      multiline
      maxRows={4}
      InputProps={{
        startAdornment: <SentimentSatisfiedOutlinedIcon />,
        endAdornment: (
          <Typography sx={{ color: theme.palette.link.main }}>Post</Typography>
        ),
      }}
    />
  );
};

export default CommentInput;
