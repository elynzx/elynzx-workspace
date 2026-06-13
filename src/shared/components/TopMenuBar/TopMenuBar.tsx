import { useTopMenuBar } from "./hooks/useTopMenuBar";
import { useWorkspaceStore } from "../../../store/useWorkspaceStore";
import { DateTimeDisplay } from "./components/DateTimeDisplay";
import { StatusControlBar } from "./components/StatusControlBar";
import { InfoModal } from "./components/InfoModal";
import { useInfoModal } from "./hooks/useDropdown";

export const TopMenuBar = () => {
  const { timeString, dateString, activeAppName } = useTopMenuBar();
  const toggleTheme = useWorkspaceStore((state) => state.toggleTheme);
  const themeMode = useWorkspaceStore((state) => state.themeMode);
  const {
    isOpen,
    menuRef,
    toggleDropdown,
    closeDropdown,
  } = useInfoModal();

  return (
    <div
      ref={menuRef}
      className="absolute top-0 left-0 w-full h-12 px-4 md:px-8 z-60 flex justify-between items-center select-none text-sm font-bold tracking-wide transition-all duration-300
      bg-ui-glass/5 ring-1 ring-ui-border shadow-[0_15px_30px_rgba(122,100,223,0.10)] text-ui-text"
    >
      <div className="flex items-center gap-5 md:gap-8">
        <InfoModal
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          closeDropdown={closeDropdown}
        />
        <span className="font-semibold tracking-wider text-white text-lg w-45">
          {activeAppName}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <StatusControlBar
          onToggleTheme={toggleTheme}
          themeMode={themeMode}
          time={timeString}
        />
        <DateTimeDisplay date={dateString} time={timeString} />
      </div>
    </div>
  );
};
