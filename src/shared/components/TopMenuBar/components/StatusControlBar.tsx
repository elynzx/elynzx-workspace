import {
  BatteryMediumIcon,
  EnvelopeSimpleIcon,
  MagnifyingGlassIcon,
  SpeakerHighIcon,
  WifiHighIcon,
} from "@phosphor-icons/react";

interface Props {
  onToggleContact: () => void;
  onToggleSpecs: () => void;
}

export const StatusControlBar = ({ onToggleContact, onToggleSpecs }: Props) => (
  <div className="hidden md:flex items-center gap-4.5 text-white px-8 py-3 rounded-xl shadow-lg select-none bg-black/20 backdrop-blur-sm">
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
