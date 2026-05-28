import { useEffect, useState } from "react";
import { formatDate } from "../utils/formatDate";
import { useWorkspaceStore } from "../../../../store/useWorkspaceStore";

export const useTopMenuBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { isPortfolioOpen, isMusicOpen, isTasksOpen } = useWorkspaceStore();

  useEffect(() => {
    const dateRefreshTimer = setInterval(
      () => setCurrentDate(new Date()),
      10000,
    );
    return () => clearInterval(dateRefreshTimer);
  }, []);

  const { timeString, dateString } = formatDate(currentDate);

  const getActiveAppName = () => {
    if (isPortfolioOpen) return "My Portfolio";
    if (isMusicOpen) return "Music Player";
    if (isTasksOpen) return "Beary Focused App";

    return "My Workspace";
  };

  return {
    timeString,
    dateString,
    activeAppName: getActiveAppName(),
  };
};
