import { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";
import { useWorkspaceStore } from "../../../../store/useWorkspaceStore";

export const useTopMenuBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const isAppOpen = useWorkspaceStore((state) => state.isAppOpen);

  useEffect(() => {
    const dateRefreshTimer = setInterval(
      () => setCurrentDate(new Date()),
      10000,
    );
    return () => clearInterval(dateRefreshTimer);
  }, []);

  const { timeString, dateString } = formatDate(currentDate);

  const getActiveAppName = () => {
    if (isAppOpen.Portfolio) return "My Portfolio";
    if (isAppOpen.Music) return "Music Player";
    if (isAppOpen.Tasks) return "Beary Focused App";

    return "My Workspace";
  };

  return {
    timeString,
    dateString,
    activeAppName: getActiveAppName(),
  };
};
