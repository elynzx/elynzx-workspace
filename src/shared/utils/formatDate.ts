export const formatDate = (date: Date) => {
  const timeFormatter = new Intl.DateTimeFormat(`en-GB`, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const timeString = timeFormatter.format(date);

  const DateFormatter = new Intl.DateTimeFormat(`en-GB`, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const dateString = DateFormatter.format(date).replace(/\//g, " . ");

  return {
    timeString,
    dateString,
  };
};
