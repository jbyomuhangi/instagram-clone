import moment from "moment";

export const formatTimestamp = (createdAt?: string) => {
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

  const createdAtDate = new Date(createdAt);

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
