import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";

import DefaultPost from "@/components/Post/DefaultPost";
import FullPost from "@/components/Post/FullPost";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectPostIds } from "@/reducers/dataReducer";

const HomeContentContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const PostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingBottom: theme.spacing(3),
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

  const itemContent = (_index: number, item: string) => {
    return (
      <PostContainer>
        <DefaultPost postId={item} onViewFullPost={handleOpenFullPost} />
      </PostContainer>
    );
  };

  return (
    <HomeContentContainer>
      <Virtuoso data={postIds} itemContent={itemContent} />

      <FullPost postId={fullPostId} onCloseFullPost={handleCloseFullPost} />
    </HomeContentContainer>
  );
};

export default Home;
