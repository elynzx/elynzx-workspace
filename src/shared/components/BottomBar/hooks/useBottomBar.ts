import {
  IdentificationCardIcon,
  FolderOpenIcon,
  MusicNotesIcon,
  CheckSquareIcon,
} from "@phosphor-icons/react";
import { useWorkspaceStore } from "../../../../store/useWorkspaceStore";

export function useBottomBar() {
  const isAppOpen = useWorkspaceStore((state) => state.isAppOpen);
  const toggleApp = useWorkspaceStore((state) => state.toggleApp);
  const focusApp = useWorkspaceStore((state) => state.focusApp);

  const dockItems = [
    {
      id: "idCard",
      label: "ID Card",
      Icon: IdentificationCardIcon,
      isActive: isAppOpen.IdCard,
      onToggle: () => {
        toggleApp("IdCard");
        focusApp("IdCard");
      },
    },
    {
      id: "portfolio",
      label: "Portfolio",
      Icon: FolderOpenIcon,
      isActive: isAppOpen.Portfolio,
      onToggle: () => {
        toggleApp("Portfolio");
        focusApp("Portfolio");
      },
    },
    {
      id: "music",
      label: "Music Player",
      Icon: MusicNotesIcon,
      isActive: isAppOpen.MusicPlayer,
      onToggle: () => {
        toggleApp("MusicPlayer");
        focusApp("MusicPlayer");
      },
    },
    {
      id: "tasks",
      label: "Beary Focused",
      Icon: CheckSquareIcon,
      isActive: isAppOpen.Tasks,
      onToggle: () => toggleApp("Tasks"),
    },
  ];

  return { dockItems };
}
