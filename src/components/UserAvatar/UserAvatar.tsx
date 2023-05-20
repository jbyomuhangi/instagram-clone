import { Avatar, SxProps } from "@mui/material";
import React from "react";

export type UserAvatarProps = {
  userName?: string;
  imageSrc?: string;
  sx?: SxProps;
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  userName,
  imageSrc = " ",
  sx = {},
}) => {
  return <Avatar alt={userName} src={imageSrc} sx={sx} />;
};

export default UserAvatar;
