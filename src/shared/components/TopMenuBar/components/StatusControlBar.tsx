import {
  BatteryMediumIcon,
  EnvelopeSimpleIcon,
  MagnifyingGlassIcon,
  SpeakerHighIcon,
  WifiHighIcon,
  SunIcon,
  MoonIcon,
  DotsThreeOutlineVerticalIcon,
} from "@phosphor-icons/react";
import type { ThemeMode } from "../../../../store/useWorkspaceStore";

interface Props {
  onToggleContact: () => void;
  onToggleSpecs: () => void;
  onToggleTheme: () => void;
  themeMode: ThemeMode;
  time: string;
}

export const StatusControlBar = ({
  onToggleContact,
  onToggleSpecs,
  onToggleTheme,
  themeMode,
  time,
}: Props) => {
  return (
    <div className="flex items-center justify-center rounded-xl text-ui-text px-8 h-9 backdrop-blur-xs bg-ui-inner/40 gap-6">
      <div
        onClick={onToggleTheme}
        className="cursor-pointer active:scale-95 transition-all"
      >
        {themeMode === "light" ? (
          <MoonIcon
            size={18}
            weight="bold"
            className="text-ui-text hover:text-pink-400"
          />
        ) : (
          <SunIcon
            size={18}
            weight="bold"
            className="text-pink-400 hover:text-ui-text"
          />
        )}
      </div>
      <div className="md:hidden flex gap-4">
        <span className="flex  opacity-40 font-light select-none">
          |
        </span>
        <span className="tracking-wider text-ui-text">{time}</span>
      </div>

      <div className="hidden md:flex items-center gap-4.5 select-none transition-colors duration-300">
        <span className="w-px h-4 bg-ui-text/20 transition-colors" />
        <EnvelopeSimpleIcon
          size={18}
          weight="bold"
          onClick={onToggleContact}
          className="hover:text-pink-400 active:scale-95 cursor-pointer transition-all"
        />
        <WifiHighIcon size={18} weight="bold" />
        <SpeakerHighIcon
          size={18}
          weight="bold"
          onClick={onToggleSpecs}
          className="cursor-pointer hover:text-pink-400 active:scale-95 transition-all"
        />
        <BatteryMediumIcon size={18} weight="bold" />
        <MagnifyingGlassIcon
          size={18}
          weight="bold"
          onClick={onToggleSpecs}
          className="cursor-pointer hover:text-pink-400 active:scale-95 transition-all"
        />
      </div>
    </div>
  );
};
