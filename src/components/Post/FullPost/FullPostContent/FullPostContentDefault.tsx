import { Favorite } from "@mui/icons-material";
import {
  Box,
  Theme,
  Zoom,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import Comments from "@/components/Post/Comments";
import CommentInput from "@/components/Post/DefaultPost/CommentInput";
import LikeCount from "@/components/Post/DefaultPost/Details/LikeCount";
import QuickActions from "@/components/Post/DefaultPost/Details/QuickActions";
import Header from "@/components/Post/DefaultPost/Header";
import RelativeTimestamp from "@/components/RelativeTimestamp";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { dataActions, selectPost, selectUser } from "@/reducers/dataReducer";

const FullPostContentContainer = styled(Box)(() => ({
  width: "80vw",
  height: "80vh",
  display: "flex",
}));

const MediaContainer = styled(Box)(({ theme }) => ({
  position: "relative",
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

const LikeOverlayContainer = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

type FullPostContentDefaultProps = {
  postId: string;
};

const FullPostContentDefault: React.FC<FullPostContentDefaultProps> = ({
  postId,
}) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [likeOverlayColor, setLikeOverlayColor] = useState<
    string | undefined
  >();

  const post = useAppSelector(selectPost(postId));
  const user = useAppSelector(selectUser(post?.userId));

  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const handleLikePost = () => {
    if (!post) return;
    const color = post.isLiked
      ? theme.palette.common.white
      : theme.palette.like.main;

    setLikeOverlayColor(color);
    setTimeout(() => {
      setLikeOverlayColor(undefined);
    }, 500);

    dispatch(dataActions.likePost({ postId }));
  };

  return (
    <FullPostContentContainer>
      <MediaContainer onDoubleClick={handleLikePost}>
        <img
          src={post?.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />

        <Zoom in={!!likeOverlayColor} timeout={200} unmountOnExit>
          <LikeOverlayContainer>
            <Favorite
              sx={{
                fontSize: "10rem",
                color: likeOverlayColor,
              }}
            />
          </LikeOverlayContainer>
        </Zoom>
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

          <CommentInput postId={post?.id} />
        </FooterContainer>
      </DetailsContainer>
    </FullPostContentContainer>
  );
};

export default FullPostContentDefault;
