import { Box, styled, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";

import DefaultPost from "@/components/Post/DefaultPost";
import FullPost from "@/components/Post/FullPost";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { dataActions, selectPostIds } from "@/reducers/dataReducer";
import StorySection from "./StorySection";

const PostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingBottom: theme.spacing(3),
}));

const HomePage: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [fullPostId, setFullPostId] = useState<string | undefined>();

  const postIds = useAppSelector(selectPostIds);

  const handleOpenFullPost = (postId?: string) => {
    if (!postId) return;
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

  const handleEndReached = () => {
    if (postIds.length > 100) return;
    dispatch(dataActions.getMorePosts());
  };

  return (
    <Box>
      <Box sx={{ paddingBottom: theme.spacing(2) }}>
        <StorySection />
      </Box>

      <Virtuoso
        useWindowScroll
        data={postIds}
        itemContent={itemContent}
        endReached={handleEndReached}
      />

      <FullPost postId={fullPostId} onCloseFullPost={handleCloseFullPost} />
    </Box>
  );
};

export default HomePage;
