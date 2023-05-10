import { Box, styled, useTheme } from "@mui/material";
import React from "react";

import CommentInput from "@/components/Post/DefaultPost/CommentInput";
import Header from "@/components/Post/DefaultPost/Header";
import QuickActions from "@/components/Post/DefaultPost/QuickActions";

const FullPostContainer = styled(Box)(() => ({
  width: "80vw",
  height: "80vh",
  display: "flex",
}));

const MediaContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.common.black,
}));

const DetailsContainer = styled(Box)(() => ({
  width: "500px",
  display: "flex",
  flexDirection: "column",
}));

const CommentContainer = styled(Box)(() => ({
  flex: 1,
}));

type RequiredProps = {};

type DefaultProps = {};

const FullPost: React.FC<RequiredProps & DefaultProps> = ({}) => {
  const theme = useTheme();
  return (
    <FullPostContainer>
      <MediaContainer></MediaContainer>

      <DetailsContainer>
        <Header />

        <CommentContainer></CommentContainer>

        <Box sx={{ padding: `0px ${theme.spacing(1)}` }}>
          <QuickActions />
        </Box>
        <CommentInput />
      </DetailsContainer>
    </FullPostContainer>
  );
};

FullPost.defaultProps = {} as DefaultProps;

export default FullPost;
