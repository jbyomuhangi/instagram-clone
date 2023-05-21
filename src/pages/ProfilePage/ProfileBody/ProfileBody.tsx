import { Box, styled } from "@mui/material";
import React from "react";
import { VirtuosoGrid } from "react-virtuoso";

const ListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

const ItemContainer = styled(Box)(() => ({
  width: "32%",
  aspectRatio: "1/1",
  backgroundColor: "black",
}));

const ProfileBody: React.FC = () => {
  return (
    <Box>
      <VirtuosoGrid
        useWindowScroll
        totalCount={50}
        components={{
          Item: ItemContainer,
          List: ListContainer as typeof Box,
        }}
      />
    </Box>
  );
};

export default ProfileBody;
