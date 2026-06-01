import {
  BatteryMediumIcon,
  EnvelopeSimpleIcon,
  MagnifyingGlassIcon,
  SpeakerHighIcon,
  WifiHighIcon,
  SunIcon,
  MoonIcon,
} from "@phosphor-icons/react";
import type { ThemeMode } from "../../../../store/useWorkspaceStore";

interface Props {
  onToggleContact: () => void;
  onToggleSpecs: () => void;
  onToggleTheme: () => void;
  themeMode: ThemeMode;
}

export const StatusControlBar = ({
  onToggleContact,
  onToggleSpecs,
  onToggleTheme,
  themeMode,
}: Props) => (
  <div className="hidden md:flex items-center gap-4.5 text-white px-8 py-3 rounded-xl shadow-lg select-none bg-black/20 backdrop-blur-sm">
    <div
      onClick={onToggleTheme}
      className="cursor-pointer active:scale-95 transition-all"
    >
      {themeMode === "light" ? (
        <MoonIcon
          size={18}
          weight="bold"
          className="text-purple-300 hover:text-purple-400"
        />
      ) : (
        <SunIcon
          size={18}
          weight="bold"
          className="text-amber-400 hover:text-amber-300"
        />
      )}
    </div>
    <span className="w-px h-4 bg-white/10" />

    <EnvelopeSimpleIcon
      size={18}
      weight="bold"
      onClick={onToggleContact}
      className="hover:text-[#F69BC3] active:scale-95 cursor-pointer transition-all"
    />
    <WifiHighIcon size={18} weight="bold" />
    <SpeakerHighIcon
      size={18}
      weight="bold"
      onClick={onToggleSpecs}
      className="cursor-pointer hover:text-[#F69BC3] active:scale-95 transition-all"
    />
    <BatteryMediumIcon size={18} weight="bold" />
    <MagnifyingGlassIcon
      size={18}
      weight="bold"
      onClick={onToggleSpecs}
      className="cursor-pointer hover:text-[#F69BC3] active:scale-95 transition-all"
    />
  </div>
);
