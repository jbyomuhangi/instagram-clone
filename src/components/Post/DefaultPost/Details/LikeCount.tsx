import { Typography } from "@mui/material";
import React from "react";

type RequiredProps = {};

type DefaultProps = {};

const LikeCount: React.FC<RequiredProps & DefaultProps> = ({}) => {
  return <Typography sx={{ fontWeight: "bold" }}>300 likes</Typography>;
};

LikeCount.defaultProps = {} as DefaultProps;

export default LikeCount;
