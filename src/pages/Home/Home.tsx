import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";

import DefaultPost from "@/components/Post/DefaultPost";
import FullPost from "@/components/Post/FullPost";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { dataActions, selectPostIds } from "@/reducers/dataReducer";

const HomeContentContainer = styled(Box)(() => ({
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
  const dispatch = useAppDispatch();
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

  const handleEndReached = () => {
    dispatch(dataActions.getMorePosts());
  };

  return (
    <HomeContentContainer>
      <Virtuoso
        data={postIds}
        itemContent={itemContent}
        endReached={handleEndReached}
      />

      <FullPost postId={fullPostId} onCloseFullPost={handleCloseFullPost} />
    </HomeContentContainer>
  );
};

export default Home;
