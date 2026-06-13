import type { Icon } from "@phosphor-icons/react";

interface Props {
  label: string;
  Icon: Icon;
  isActive: boolean;
  onToggle: () => void;
}

export const DockItem = ({ label, Icon, isActive, onToggle }: Props) => {
  const buttonStyle = isActive
    ? "bg-ui-button text-white shadow-lg "
    : "bg-white/10 text-white hover:bg-ui-button hover:text-white";
                                                                      
  return (
    <button
      onClick={onToggle}
      className="relative group flex flex-col items-center focus:outline-none"
    >
      <div className={`p-2 md:p-3 rounded-xl transition-all duration-300 transform md:group-hover:-translate-y-2 text-xl md:text-2xl ${buttonStyle}`}>
        <Icon size={24} weight="fill" />
      </div>

      {isActive && (
        <div className="absolute -bottom-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-[0_0_5px_white]" />
      )}

      <span className="hidden md:block absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 text-white text-[10px] px-2 py-1 rounded-md backdrop-blur-md pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};
