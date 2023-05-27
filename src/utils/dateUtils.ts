import moment from "moment";

export const formatTimestamp = (timestamp?: string) => {
  if (!timestamp) return undefined;

  const nowMoment = moment();
  const createdAtMoment = moment(timestamp);
  const duration = moment.duration(nowMoment.diff(createdAtMoment));

  if (duration.asMinutes() < 1) {
    return `${Math.round(duration.asSeconds())} seconds ago`;
  }

  if (duration.asHours() < 1) {
    return `${Math.round(duration.asMinutes())} minutes ago`;
  }

  if (duration.asDays() < 1) {
    return `${Math.round(duration.asHours())} hours ago`;
  }

  if (duration.asDays() < 7) {
    return `${Math.round(duration.asDays())} days ago`;
  }

  const createdAtDate = new Date(timestamp);

  if (nowMoment.isSame(createdAtMoment, "year")) {
    return new Intl.DateTimeFormat(undefined, {
      day: "numeric",
      month: "short",
    }).format(createdAtDate);
  }

  return new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(createdAtDate);
};
