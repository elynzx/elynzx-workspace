
import {
  IdentificationCardIcon,
  FolderOpenIcon,
  MusicNotesIcon,
  CheckSquareIcon,
} from "@phosphor-icons/react";
import { useWorkspaceStore } from "../../../../store/useWorkspaceStore";

export function useBottomBar() {
  const store = useWorkspaceStore();

  const dockItems = [
    {
      id: "idCard",
      label: "ID Card",
      Icon: IdentificationCardIcon,
      isActive: store.isIdCardOpen,
      onToggle: store.toggleIdCard,
    },
    {
      id: "portfolio",
      label: "Portfolio",
      Icon: FolderOpenIcon,
      isActive: store.isPortfolioOpen,
      onToggle: store.togglePortfolio,
    },
    {
      id: "music",
      label: "Music Player",
      Icon: MusicNotesIcon,
      isActive: store.isMusicOpen,
      onToggle: store.toggleMusic,
    },
    {
      id: "tasks",
      label: "Beary Focused",
      Icon: CheckSquareIcon,
      isActive: store.isTasksOpen,
      onToggle: store.toggleTasks,
    },
  ];

  return { dockItems };
}
