export const formatDate = (date: Date) => {
  const timeString = new Intl.DateTimeFormat(`en-GB`, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  const dateString = new Intl.DateTimeFormat(`en-GB`, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
    .format(date)
    .replace(/\//g, " . ");

  return {
    timeString,
    dateString,
  };
};
