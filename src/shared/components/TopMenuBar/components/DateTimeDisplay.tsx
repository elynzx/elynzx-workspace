import { CalendarBlankIcon } from "@phosphor-icons/react";

interface Props {
  date: string;
  time: string;
}

export const DateTimeDisplay = ({ date, time }: Props) => (
  <div className="flex items-center gap-3 text-ui-text px-8 h-9 rounded-xl tabular-nums font-bold backdrop-blur-2xl transition-colors duration-300">
    <div className="flex items-center gap-2 text-ui-text font-medium">
      <CalendarBlankIcon size={18} weight="bold" className="text-ui-text" />
      <span>{date}</span>
    </div>

    <span className="opacity-40 font-light select-none">|</span>
    <span className="tracking-wider text-ui-text">{time}</span>
  </div>
);
