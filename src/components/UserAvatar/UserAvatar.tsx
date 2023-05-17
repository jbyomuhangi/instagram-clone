import { Avatar } from "@mui/material";
import React from "react";

export type UserAvatarProps = {
  userName?: string;
  imageSrc?: string;
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  userName,
  imageSrc = " ",
}) => {
  return <Avatar alt={userName} src={imageSrc} />;
};

export default UserAvatar;
