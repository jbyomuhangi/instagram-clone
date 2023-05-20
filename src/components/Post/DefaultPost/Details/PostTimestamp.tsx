import { Typography } from "@mui/material";
import React, { useMemo } from "react";

import { formatTimestamp } from "@/utils/dateUtils";

export type PostTimestampProps = { createdAt?: string };

const PostTimestamp: React.FC<PostTimestampProps> = ({ createdAt }) => {
  const formattedTime = useMemo(() => {
    return formatTimestamp(createdAt);
  }, [createdAt]);

  if (!formattedTime) return null;

  return (
    <Typography sx={{ fontSize: "0.85rem", opacity: "60%" }}>
      {formattedTime}
    </Typography>
  );
};

export default PostTimestamp;
