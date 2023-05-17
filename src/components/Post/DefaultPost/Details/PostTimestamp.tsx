import { Typography } from "@mui/material";
import moment from "moment";
import React, { useMemo } from "react";

export type PostTimestampProps = { createdAt?: Date };

const PostTimestamp: React.FC<PostTimestampProps> = ({ createdAt }) => {
  const formattedTime = useMemo(() => {
    if (!createdAt) return undefined;

    const nowMoment = moment();
    const createdAtMoment = moment(createdAt);
    const duration = moment.duration(nowMoment.diff(createdAtMoment));

    if (duration.asHours() < 1) {
      return `${Math.round(duration.asMinutes())} minutes ago`;
    }

    if (duration.asDays() < 1) {
      return `${Math.round(duration.asHours())} hours ago`;
    }

    if (duration.asDays() < 7) {
      return `${Math.round(duration.asDays())} days ago`;
    }

    if (nowMoment.isSame(createdAtMoment, "year")) {
      return new Intl.DateTimeFormat(undefined, {
        day: "numeric",
        month: "short",
      }).format(createdAt);
    }

    return new Intl.DateTimeFormat(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(createdAt);
  }, [createdAt]);

  if (!formattedTime) return null;
  return (
    <Typography sx={{ fontSize: "0.85rem", opacity: "60%" }}>
      {formattedTime}
    </Typography>
  );
};

export default PostTimestamp;
