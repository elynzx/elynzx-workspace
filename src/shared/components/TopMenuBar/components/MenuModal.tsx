import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const MenuModal = ({ title, children }: Props) => (
  <div className="absolute top-13 left-0 w-64 p-4 rounded-2xl bg-ui-glass backdrop-blur-2xl border border-ui-inner shadow-[0_20px_50px_rgba(122,100,223,0.25)] ring-1 ring-ui-text/10 animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-3 z-50 transition-all">
    <div className="text-xs uppercase tracking-widest font-extrabold mb-0.5 select-none text-pink-400">
      {title}
    </div>
    {children}
  </div>
);
