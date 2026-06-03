import { GithubLogoIcon, HeartIcon } from "@phosphor-icons/react";

interface InfoMenuProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  systemSpecs: { label: string; value: string }[];
}

export const InfoMenu = ({
  isOpen,
  toggleDropdown,
  closeDropdown,
}: InfoMenuProps) => {
  const techStack = [
    { name: "React 19", type: "Library" },
    { name: "TypeScript", type: "Language" },
    { name: "Tailwind CSS", type: "Styles" },
    { name: "Motion", type: "Animations" },
    { name: "Zustand", type: "State" },
  ];

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
        className={`px-4 py-1.5 font-bold tracking-wide rounded-xl transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 select-none ${
          isOpen
            ? "bg-ui-inner/40 text-pink-400 border border-ui-inner"
            : "text-ui-text/80 hover:text-pink-400 hover:bg-ui-glass/10 border border-transparent"
        }`}
      >
        <span>Info</span>
      </button>

      {isOpen && (
        <div className="absolute top-10 left-0 w-64 p-4 rounded-2xl flex flex-col gap-3.5 z-50 pointer-events-auto bg-ui-inner/5 backdrop-blur-2xl border-b border-ui-border ring-1 ring-ui-border shadow-[0_15px_30px_rgba(122,100,223,0.10)]">
          <div className="relative flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold pb-1 border-b border-white/5 select-none text-pink-400 z-10">
            <HeartIcon size={14} weight="bold" className="animate-pulse" />
            <span>SYSTEM_SPECS.LOG</span>
          </div>

          <div className="relative flex flex-col gap-1.5 p-0.5 w-full select-none z-10">
            <span className="text-[10px] text-ui-text/40 uppercase font-black tracking-wider block mb-1">
              Active Tech Stack:
            </span>
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex justify-between items-center text-[11px]"
              >
                <span className="text-ui-text/90 font-bold">{tech.name}</span>
                <span className="font-medium text-ui-text/50">{tech.type}</span>
              </div>
            ))}
          </div>

          <div className="relative pt-1 z-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => closeDropdown()}
              className="w-full text-center py-3 bg-pink-400 hover:bg-pink-400/90 border border-white/10 text-white rounded-xl text-xs transition-all font-bold shadow-sm cursor-pointer flex items-center justify-center gap-2 active:scale-98"
            >
              <GithubLogoIcon size={15} weight="bold" />
              <span>View Repository</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
