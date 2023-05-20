import { Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";

import { formatTimestamp } from "@/utils/dateUtils";

export type PostTimestampProps = { createdAt?: string };

const PostTimestamp: React.FC<PostTimestampProps> = ({ createdAt }) => {
  const theme = useTheme();

  const formattedTime = useMemo(() => {
    return formatTimestamp(createdAt);
  }, [createdAt]);

  if (!formattedTime) return null;

  return (
    <Typography
      sx={{ fontSize: "0.85rem", color: theme.palette.text.secondary }}
    >
      {formattedTime}
    </Typography>
  );
};

export default PostTimestamp;
