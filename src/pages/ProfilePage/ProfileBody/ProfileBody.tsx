import { Box, styled } from "@mui/material";
import React from "react";
import { VirtuosoGrid } from "react-virtuoso";

import PostItem from "./PostItem";

const ListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

const ItemContainer = styled(Box)(() => ({
  width: "32%",
  aspectRatio: "1/1",
}));

type ProfileBodyProps = {
  postIds?: string[];
  onOpenFullPost?: (postId?: string) => void;
};

const ProfileBody: React.FC<ProfileBodyProps> = ({
  postIds = [],
  onOpenFullPost,
}) => {
  const itemContent = (index: number) => {
    return <PostItem postId={postIds[index]} onOpenFullPost={onOpenFullPost} />;
  };

  return (
    <Box>
      <VirtuosoGrid
        useWindowScroll
        totalCount={postIds.length}
        itemContent={itemContent}
        components={{
          Item: ItemContainer,
          List: ListContainer as typeof Box,
        }}
      />
    </Box>
  );
};

export default ProfileBody;
