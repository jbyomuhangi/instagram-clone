import { SxProps, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";

import { formatTimestamp } from "@/utils/dateUtils";

export type RelativeTimestampProps = { timestamp?: string; sx?: SxProps };

const RelativeTimestamp: React.FC<RelativeTimestampProps> = ({
  timestamp,
  sx = {},
}) => {
  const theme = useTheme();

  const formattedTimestamp = useMemo(() => {
    return formatTimestamp(timestamp);
  }, [timestamp]);

  if (!formattedTimestamp) return null;

  return (
    <Typography
      sx={{ fontSize: "0.85rem", color: theme.palette.text.secondary, ...sx }}
    >
      {formattedTimestamp}
    </Typography>
  );
};

export default RelativeTimestamp;
