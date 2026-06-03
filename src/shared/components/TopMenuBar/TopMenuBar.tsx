import { HeartIcon } from "@phosphor-icons/react";
import { useTopMenuBar } from "./hooks/useTopMenuBar";
import { useDropdown } from "./hooks/useDropdown";
import { MenuDropdown } from "./components/MenuDropdown";
import { useWorkspaceStore } from "../../../store/useWorkspaceStore";
import { DateTimeDisplay } from "./components/DateTimeDisplay";
import { StatusControlBar } from "./components/StatusControlBar";

const SYSTEM_SPECS = [
  { label: "OS Version", value: "KawaiiOS v2.0" },
  { label: "Environment", value: "React + Tailwind" },
  { label: "Style", value: "Y2K Glassmorphism" },
];

export const TopMenuBar = () => {
  const { timeString, dateString, activeAppName } = useTopMenuBar();
  const toggleApp = useWorkspaceStore((state) => state.toggleApp);
  const toggleTheme = useWorkspaceStore((state) => state.toggleTheme);
  const themeMode = useWorkspaceStore((state) => state.themeMode);
  const { activeDropdown, menuRef, toggleDropdown, closeDropdown } =
    useDropdown();

  return (
    <div
      ref={menuRef}
      className="absolute top-0 left-0 w-full h-16 px-4 md:px-8 z-50 flex justify-between items-center select-none text-sm font-bold tracking-wide transition-all duration-300
      bg-ui-glass/5 backdrop-blur-2xl border-b border-ui-border shadow-[0_20px_50px_rgba(122,100,223,0.25)]  text-ui-text ring-1 ring-ui-border"
    >
      <div className="flex items-center gap-5 md:gap-8">
        <HeartIcon
          size={24}
          weight="bold"
          className="cursor-pointer text-ui-accent drop-shadow-[0_2px_4px_rgba(246,155,195,0.4)] hover:scale-110 active:scale-95 transition-all"
        />

        <span className="font-semibold tracking-wider text-ui-text text-lg w-45">
          {activeAppName}
        </span>

        <MenuDropdown
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          closeDropdown={closeDropdown}
          toggleContact={() => toggleApp("Contact")}
          toggleSpecs={() => toggleApp("Specs")}
          systemSpecs={SYSTEM_SPECS}
        />
      </div>

      <div className="flex items-center gap-5">
        <StatusControlBar
          onToggleContact={() => toggleApp("Contact")}
          onToggleSpecs={() => toggleApp("Specs")}
          onToggleTheme={toggleTheme}
          themeMode={themeMode}
          time={timeString}
        />
        <DateTimeDisplay date={dateString} time={timeString} />
      </div>
    </div>
  );
};
