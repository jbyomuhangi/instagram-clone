import { Typography } from "@mui/material";
import React from "react";

type RequiredProps = {};

type DefaultProps = {};

const PostTimestamp: React.FC<RequiredProps & DefaultProps> = ({}) => {
  return <Typography sx={{ fontSize: "0.85rem" }}>2 hours ago</Typography>;
};

PostTimestamp.defaultProps = {} as DefaultProps;

export default PostTimestamp;
