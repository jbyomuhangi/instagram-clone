import { Box, styled } from "@mui/material";
import React from "react";

import DefaultPost from "@/components/Post/DefaultPost";

const HomeContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: `${theme.spacing(3)} 0px`,
  overflow: "auto",
}));

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <DefaultPost />
      <DefaultPost />
      <DefaultPost />
      <DefaultPost />
      <DefaultPost />
      <DefaultPost />
      <DefaultPost />
    </HomeContainer>
  );
};

export default Home;
