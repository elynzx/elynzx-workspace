import { CalendarBlankIcon } from "@phosphor-icons/react";

interface Props {
  date: string;
  time: string;
}

export const DateTimeDisplay = ({ date, time }: Props) => (
  <div className="hidden md:flex bg-ui-inner/40 items-center gap-3 text-white px-6 h-9 rounded-xl tabular-nums font-bold backdrop-blur-2xl transition-colors duration-300">
    <div className="flex items-center gap-2 font-medium">
      <CalendarBlankIcon size={18} weight="bold" />
      <span>{date}</span>
    </div>

    <span className="opacity-40 font-light select-none">|</span>
    <span className="tracking-wider ">{time}</span>
  </div>
);
