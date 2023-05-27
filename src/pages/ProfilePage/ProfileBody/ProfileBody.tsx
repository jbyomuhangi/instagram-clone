import { Box, styled } from "@mui/material";
import React, { useMemo } from "react";
import { Virtuoso } from "react-virtuoso";

import PostItem from "./PostItem";

const ListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const Row = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

const ItemContainer = styled(Box)(() => ({
  flex: 1,
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
  const rowsArray = useMemo(() => {
    const rowCount = Math.ceil(postIds.length / 3);
    return Array.from(Array(rowCount).keys());
  }, [postIds]);

  const columnArray = useMemo(() => {
    return Array.from(Array(3).keys());
  }, []);

  const itemContent = (rowNumber: number) => {
    return (
      <Row>
        {columnArray.map((column) => {
          const itemIndex = rowNumber * 3 + column;

          return (
            <ItemContainer key={column}>
              <PostItem
                postId={postIds[itemIndex]}
                onOpenFullPost={onOpenFullPost}
              />
            </ItemContainer>
          );
        })}
      </Row>
    );
  };

  return (
    <Box>
      <Virtuoso
        useWindowScroll
        data={rowsArray}
        itemContent={itemContent}
        components={{ List: ListContainer as typeof Box }}
      />
    </Box>
  );
};

export default ProfileBody;
