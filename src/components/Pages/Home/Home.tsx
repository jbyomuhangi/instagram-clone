import { Box, styled } from "@mui/material";
import React, { useState } from "react";

import DefaultPost from "@/components/Post/DefaultPost";
import FullPost from "@/components/Post/FullPost";
import UserAvatar from "@/components/UserAvatar";

const HomeContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: `${theme.spacing(3)} 0px`,
}));

const StoriesSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "400px",
  gap: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: "5px",
  padding: theme.spacing(1),
  overflow: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
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
      <StoriesSectionContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
          return <UserAvatar key={num} />;
        })}
      </StoriesSectionContainer>

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
