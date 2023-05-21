import { Box, styled } from "@mui/material";
import React from "react";
import { VirtuosoGrid } from "react-virtuoso";

const ProfileBodyContainer = styled(Box)(() => ({
  flex: 1,
}));

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
    <ProfileBodyContainer>
      <VirtuosoGrid
        totalCount={100}
        components={{
          Item: ItemContainer,
          List: ListContainer as typeof Box,
        }}
      />
    </ProfileBodyContainer>
  );
};

export default ProfileBody;
