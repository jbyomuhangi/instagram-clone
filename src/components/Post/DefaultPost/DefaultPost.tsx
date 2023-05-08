import { Box, styled } from "@mui/material";
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

const DefaultPost: React.FC = () => {
  return (
    <DefaultPostContainer>
      <Header />

      <Box sx={{ flex: 1, backgroundColor: "black" }}>media</Box>

      <Details />

      <Box>text area for comment</Box>
    </DefaultPostContainer>
  );
};

export default DefaultPost;
