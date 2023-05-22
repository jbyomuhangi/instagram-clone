import { Avatar, SxProps } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export type UserAvatarProps = {
  userId?: string;
  userName?: string;
  imageSrc?: string;
  sx?: SxProps;
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  userId,
  userName,
  imageSrc = " ",
  sx = {},
}) => {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (!userId) return;
    navigate(`/profile/${userId}`);
  };

  if (userId) {
    return (
      <button onClick={handleAvatarClick}>
        <Avatar alt={userName} src={imageSrc} sx={sx} />
      </button>
    );
  }

  return <Avatar alt={userName} src={imageSrc} sx={sx} />;
};

export default UserAvatar;
