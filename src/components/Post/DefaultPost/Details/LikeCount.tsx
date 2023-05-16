import { Typography } from "@mui/material";
import React from "react";

export type LikeCountProps = {
  likes?: number;
};

const LikeCount: React.FC<LikeCountProps> = ({ likes }) => {
  if (!likes) return null;
  return <Typography sx={{ fontWeight: "bold" }}>{likes} likes</Typography>;
};

export default LikeCount;
