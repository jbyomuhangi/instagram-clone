import { Box, styled } from "@mui/material";
import React, { useState } from "react";

import DefaultPost from "@/components/Post/DefaultPost";
import FullPost from "@/components/Post/FullPost";
import StorySection from "./StorySection";

const HomeContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: `${theme.spacing(3)} 0px`,
}));

const Home: React.FC = () => {
  const [isFullPostOpen, setIsFullPostOpen] = useState<boolean>(false);

  const handleOpenFullPost = () => {
    setIsFullPostOpen(true);
  };

  const handleCloseFullPost = () => {
    setIsFullPostOpen(false);
  };

  return (
    <HomeContentContainer>
      <StorySection />

      {[1, 2, 3, 4, 5, 6].map((num) => {
        return <DefaultPost key={num} onViewFullPost={handleOpenFullPost} />;
      })}

      <FullPost
        isFullPostOpen={isFullPostOpen}
        onCloseFullPost={handleCloseFullPost}
      />
    </HomeContentContainer>
  );
};

export default Home;
