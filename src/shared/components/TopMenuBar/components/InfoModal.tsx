import { GithubLogoIcon, HeartIcon } from "@phosphor-icons/react";

const techStack = [
  { name: "React 19", type: "Library" },
  { name: "TypeScript", type: "Language" },
  { name: "Tailwind CSS", type: "Styles" },
  { name: "Motion", type: "Animations" },
  { name: "Zustand", type: "State" },
];

interface InfoModalProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export const InfoModal = ({
  isOpen,
  toggleDropdown,
  closeDropdown,
}: InfoModalProps) => {
  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
        className={`px-4 py-1.5 font-bold tracking-wide rounded-xl transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 select-none ${
          isOpen
            ? "bg-ui-inner/40 text-ui-text border border-ui-glass/10"
            : "text-ui-text/80 hover:bg-ui-glass/40 border border-transparent"
        }`}
      >
        <span>
          {" "}
          <HeartIcon
            size={24}
            weight="bold"
            className="cursor-pointer text-white drop-shadow-[0_2px_4px_rgba(246,155,195,0.4)] hover:scale-110 active:scale-95 transition-all"
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-15 left-0 w-64 p-4 rounded-2xl flex flex-col gap-3.5 z-50 pointer-events-auto bg-ui-inner/80 backdrop-blur-2xl ring-1 ring-ui-border shadow-sm">
          <div className="absolute inset-0 bg-[linear-gradient(var(--ui-text)_50%,transparent_50%)] bg-size-[100%_4px] opacity-2 md:opacity- z-10 pointer-events-none light:hidden" />

          <div className="relative flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold pb-1 border-b border-ui-border select-none text-ui-text z-10">
            <HeartIcon size={14} weight="bold" className="animate-pulse" />
            <span>SYSTEM_SPECS.LOG</span>
          </div>

          <div className="relative flex flex-col gap-1.5 p-0.5 w-full select-none z-10">
            <span className="text-[10px] text-ui-accent uppercase font-black tracking-wider block mb-1">
              Active Tech Stack:
            </span>
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex justify-between items-center text-[11px]"
              >
                <span className="text-ui-text font-bold">{tech.name}</span>
                <span className="font-medium text-ui-text/70">{tech.type}</span>
              </div>
            ))}
          </div>

          <div className="relative pt-1 z-10">
            <a
              href="https://github.com/elynzx/elynzx-workspace"
              target="_blank"
              rel="noreferrer"
              onClick={() => closeDropdown()}
              className="w-full text-center py-3 bg-ui-button/80 hover:bg-ui-button border border-white/10 text-white rounded-xl text-xs transition-all font-bold shadow-sm cursor-pointer flex items-center justify-center gap-2 active:scale-98"
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
