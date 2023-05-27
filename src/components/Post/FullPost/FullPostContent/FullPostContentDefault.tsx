import { Box, Theme, styled, useMediaQuery } from "@mui/material";
import React from "react";

import Comments from "@/components/Post/Comments";
import CommentInput from "@/components/Post/DefaultPost/CommentInput";
import LikeCount from "@/components/Post/DefaultPost/Details/LikeCount";
import QuickActions from "@/components/Post/DefaultPost/Details/QuickActions";
import Header from "@/components/Post/DefaultPost/Header";
import RelativeTimestamp from "@/components/RelativeTimestamp";
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

const CommentSectionContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
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
  const user = useAppSelector(selectUser(post?.userId));

  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  return (
    <FullPostContentContainer>
      <MediaContainer>
        <img
          src={post?.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </MediaContainer>

      <DetailsContainer
        sx={{ ...(isMediumScreen && { width: "unset", flex: 1 }) }}
      >
        <Header
          userName={user?.userName}
          UserAvatarProps={{
            userId: user?.id,
            userName: user?.userName,
            imageSrc: user?.profilePictureImage,
          }}
        />

        <CommentSectionContainer>
          <Comments commentIds={post?.commentIds} />
        </CommentSectionContainer>

        <FooterContainer>
          <DetailSummaryContainer>
            <QuickActions postId={post?.id} isLiked={post?.isLiked} />

            <Box>
              <LikeCount likes={post?.likes} />
              <RelativeTimestamp timestamp={post?.createdAt} />
            </Box>
          </DetailSummaryContainer>

          <CommentInput />
        </FooterContainer>
      </DetailsContainer>
    </FullPostContentContainer>
  );
};

export default FullPostContentDefault;
