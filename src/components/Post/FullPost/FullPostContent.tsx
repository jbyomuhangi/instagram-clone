import { Box, Theme, styled, useMediaQuery } from "@mui/material";
import React from "react";

import DefaultPost from "@/components/Post/DefaultPost";
import CommentInput from "@/components/Post/DefaultPost/CommentInput";
import LikeCount from "@/components/Post/DefaultPost/Details/LikeCount";
import PostTimestamp from "@/components/Post/DefaultPost/Details/PostTimestamp";
import QuickActions from "@/components/Post/DefaultPost/Details/QuickActions";
import Header from "@/components/Post/DefaultPost/Header";

const FullPostContentContainer = styled(Box)(() => ({
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

const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  paddingTop: theme.spacing(2),
}));

const DetailSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: `0px ${theme.spacing(1)}`,
}));

const FullPostContent: React.FC = () => {
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  if (isExtraSmallScreen) {
    return <DefaultPost isFullPost />;
  }

  return (
    <FullPostContentContainer>
      <MediaContainer></MediaContainer>

      <DetailsContainer
        sx={{ ...(isMediumScreen && { width: "unset", flex: 1 }) }}
      >
        <Header />

        <CommentContainer></CommentContainer>

        <FooterContainer>
          <DetailSummaryContainer>
            <QuickActions />

            <Box>
              <LikeCount />
              <PostTimestamp />
            </Box>
          </DetailSummaryContainer>

          <CommentInput />
        </FooterContainer>
      </DetailsContainer>
    </FullPostContentContainer>
  );
};

export default FullPostContent;
