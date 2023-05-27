import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import FullPost from "@/components/Post/FullPost";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectUser, selectUserPostIds } from "@/reducers/dataReducer";
import ProfileBody from "./ProfileBody";
import ProfileSummary from "./ProfileSummary";

const ProfilePageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const ProfileContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "640px",
  padding: `${theme.spacing(2)} 0px`,
}));

const ProfilePage: React.FC = () => {
  const { userId = "" } = useParams();
  const navigate = useNavigate();

  const [fullPostId, setFullPostId] = useState<string | undefined>();

  const user = useAppSelector(selectUser(userId));
  const postIds = useAppSelector(selectUserPostIds(user?.id));

  useEffect(() => {
    if (user?.id) {
      handleCloseFullPost();
    } else {
      navigate("/");
    }
  }, [user?.id, navigate]);

  const handleOpenFullPost = (postId?: string) => {
    if (!postId) return;
    setFullPostId(postId);
  };

  const handleCloseFullPost = () => {
    setFullPostId(undefined);
  };

  if (!user) {
    return (
      <Box>
        <Typography>User not found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <ProfilePageContainer>
        <ProfileContentContainer>
          <ProfileSummary
            userName={user.userName}
            fullName={user.fullName}
            UserAvatarProps={{ imageSrc: user.profilePictureImage }}
            StatSummaryProps={{
              followingCount: user.followingCount,
              followerCount: user.followerCount,
              postCount: postIds.length,
            }}
          />

          <ProfileBody
            postIds={postIds}
            ProfileBodyStatSummaryProps={{
              followerCount: user.followerCount,
              followingCount: user.followingCount,
              postCount: postIds.length,
            }}
            onOpenFullPost={handleOpenFullPost}
          />
        </ProfileContentContainer>
      </ProfilePageContainer>

      <FullPost postId={fullPostId} onCloseFullPost={handleCloseFullPost} />
    </Box>
  );
};

export default ProfilePage;
