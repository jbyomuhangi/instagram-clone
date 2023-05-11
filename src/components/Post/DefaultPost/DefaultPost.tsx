import { Box, Theme, styled, useMediaQuery } from "@mui/material";
import React from "react";

import CommentInput from "./CommentInput";
import Details from "./Details/Details";
import Header from "./Header";

const DefaultPostContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  width: "100%",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.grey[400]}`,
  backgroundColor: theme.palette.common.white,
}));

const MediaContainer = styled(Box)(() => ({
  backgroundColor: "black",
  minHeight: "300px",
  maxHeight: "450px",
  height: "100vh",
}));

type DefaultProps = {
  isFullPost?: boolean;
  onViewFullPost?: () => void;
};

const DefaultPost: React.FC<DefaultProps> = ({
  isFullPost,
  onViewFullPost,
}) => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <DefaultPostContainer
      sx={{ ...(isFullPost && { width: "80vw", border: "unset" }) }}
    >
      <Header />

      <MediaContainer></MediaContainer>

      <Details
        isFullPost={isFullPost}
        isExtraSmallScreen={isExtraSmallScreen}
        onViewFullPost={onViewFullPost}
      />

      {!isExtraSmallScreen && <CommentInput />}
    </DefaultPostContainer>
  );
};

DefaultPost.defaultProps = {} as DefaultProps;

export default DefaultPost;
