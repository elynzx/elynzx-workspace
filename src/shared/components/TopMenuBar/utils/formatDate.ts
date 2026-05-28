export const formatDate = (date: Date) => {
  const timeFormatter = new Intl.DateTimeFormat(`en-GB`, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const timeString = timeFormatter.format(date);

  const DateFormatter = new Intl.DateTimeFormat(`en-US`, {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const dateString = DateFormatter.format(date);

  return {
    timeString,
    dateString,
  };
};
