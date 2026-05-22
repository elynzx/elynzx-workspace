import {
  CommandIcon,
  WifiHighIcon,
  SpeakerHighIcon,
  BatteryMediumIcon,
  EnvelopeSimpleIcon,
  MagnifyingGlassIcon,
  SlidersIcon,
} from "@phosphor-icons/react";
import { useTopMenuBar } from "./hooks/useTopMenuBar";

export const TopMenuBar = () => {
  const { timeString, dateString, activeAppName } = useTopMenuBar();
  return (
    <div
      className="absolute top-0 left-0 w-full bg-white/45 backdrop-blur-2xl border-b border-white/20 px-4 md:px-8 h-10 flex justify-between items-center text-white/90 text-sm font-medium shadow-sm select-none z-50"
      role="banner"
    >
      <div className="flex items-center gap-5">
        <CommandIcon
          size={18}
          weight="bold"
          className="cursor-pointer hover:text-white"
        />
        <span className="font-bold text-white tracking-wide transition-all duration-200">
        {activeAppName}
        </span>
        <span className="hidden md:inline text-white/50 cursor-pointer hover:text-white text-xs">
          File
        </span>
        <span className="hidden md:inline text-white/50 cursor-pointer hover:text-white text-xs">
          View
        </span>
        <span className="hidden md:inline text-white/50 cursor-pointer hover:text-white text-xs">
          Info
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-4 text-white/80">
          <EnvelopeSimpleIcon
            size={18}
            className="hover:text-white cursor-pointer"
          />
          <WifiHighIcon size={18} />
          <SpeakerHighIcon size={18} />
          <BatteryMediumIcon size={18} />
          <MagnifyingGlassIcon
            size={18}
            className="cursor-pointer hover:text-white"
          />
          <SlidersIcon size={18} className="cursor-pointer hover:text-white" />
        </div>

        <div className="hidden sm:block w-1px h-4 bg-white/20" />

        <div className="flex items-center gap-1.5 text-xs font-semibold tracking-tight tabular-nums">
          <span>{timeString}</span>
          <span className="text-white/40 font-normal">|</span>
          <span className="text-white/75 font-normal">{dateString}</span>
        </div>
      </div>
    </div>
  );
};
