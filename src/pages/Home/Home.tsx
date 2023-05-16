import { Box, styled } from "@mui/material";
import React, { useState } from "react";

import DefaultPost from "@/components/Post/DefaultPost";
import FullPost from "@/components/Post/FullPost";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectPostIds } from "@/reducers/dataReducer";
import StorySection from "./StorySection";

const HomeContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: `${theme.spacing(3)} 0px`,
}));

const Home: React.FC = () => {
  const [fullPostId, setFullPostId] = useState<string | undefined>();

  const postIds = useAppSelector(selectPostIds);

  const handleOpenFullPost = (postId: string) => {
    setFullPostId(postId);
  };

  const handleCloseFullPost = () => {
    setFullPostId(undefined);
  };

  return (
    <HomeContentContainer>
      <StorySection />

      {postIds.map((postId) => {
        return (
          <DefaultPost
            key={postId}
            postId={postId}
            onViewFullPost={handleOpenFullPost}
          />
        );
      })}

      <FullPost postId={fullPostId} onCloseFullPost={handleCloseFullPost} />
    </HomeContentContainer>
  );
};

export default Home;
