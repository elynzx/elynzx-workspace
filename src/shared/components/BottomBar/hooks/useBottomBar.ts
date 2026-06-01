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

  const dockItems = [
    {
      id: "idCard",
      label: "ID Card",
      Icon: IdentificationCardIcon,
      isActive: isAppOpen.IdCard,
      onToggle: () => toggleApp("IdCard"),
    },
    {
      id: "portfolio",
      label: "Portfolio",
      Icon: FolderOpenIcon,
      isActive: isAppOpen.Portfolio,
      onToggle: () => toggleApp("Portfolio"),
    },
    {
      id: "music",
      label: "Music Player",
      Icon: MusicNotesIcon,
      isActive: isAppOpen.Music,
      onToggle: () => toggleApp("Music"),
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
