import { Box, Theme, styled, useMediaQuery } from "@mui/material";
import React from "react";

import CommentInput from "@/components/Post/DefaultPost/CommentInput";
import LikeCount from "@/components/Post/DefaultPost/Details/LikeCount";
import PostTimestamp from "@/components/Post/DefaultPost/Details/PostTimestamp";
import QuickActions from "@/components/Post/DefaultPost/Details/QuickActions";
import Header from "@/components/Post/DefaultPost/Header";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectPost, selectUser } from "@/reducers/dataReducer";

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
  borderTop: `1px solid ${theme.palette.border.main}`,
  paddingTop: theme.spacing(2),
}));

const DetailSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: `0px ${theme.spacing(1)}`,
}));

type FullPostContentDefaultProps = {
  postId: string;
};

const FullPostContentDefault: React.FC<FullPostContentDefaultProps> = ({
  postId,
}) => {
  const post = useAppSelector(selectPost(postId));
  const user = useAppSelector(selectUser(post.userId));

  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  return (
    <FullPostContentContainer>
      <MediaContainer></MediaContainer>

      <DetailsContainer
        sx={{ ...(isMediumScreen && { width: "unset", flex: 1 }) }}
      >
        <Header userName={user.userName} />

        <CommentContainer></CommentContainer>

        <FooterContainer>
          <DetailSummaryContainer>
            <QuickActions />

            <Box>
              <LikeCount likes={post.likes} />
              <PostTimestamp />
            </Box>
          </DetailSummaryContainer>

          <CommentInput />
        </FooterContainer>
      </DetailsContainer>
    </FullPostContentContainer>
  );
};

export default FullPostContentDefault;
