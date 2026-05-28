import { CalendarBlankIcon } from "@phosphor-icons/react";

interface Props {
  date: string;
  time: string;
}

export const DateTimeDisplay = ({ date, time }: Props

) => (
  <div className="flex items-center gap-3 text-white px-8 py-3 rounded-xl shadow-md tabular-nums font-bold bg-black/20 backdrop-blur-sm">

    <div className="flex items-center gap-2 text-white font-medium">
      <CalendarBlankIcon size={18} weight="bold" className="text-white" />
      <span>{date}</span>
    </div>
    
    <span className="opacity-40 font-light select-none">|</span>

    <span className="tracking-wider text-white">
      {time}
    </span>
  </div>
);
