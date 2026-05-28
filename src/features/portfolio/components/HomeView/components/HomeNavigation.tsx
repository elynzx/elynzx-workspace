import { HOME_TABS, type HomeTab } from "../data/homeTabsData";
import { useHomeTabStore } from "../store/useHomeTabStore";

export const HomeNavigation = () => {
  const { activeTab, setActiveTab, setTabClicked } = useHomeTabStore();

  const handleTabChange = (id: HomeTab) => {
    setTabClicked(true);
    setActiveTab(id);
  };

  return (
    <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/10 rounded-xl w-fit select-none mr-6">
      {HOME_TABS.map(({ id, label, Icon }) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => handleTabChange(id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-code font-black text-[10px] tracking-wider uppercase transition-all duration-200 focus:outline-none ${
              isActive
                ? "bg-white/20 text-white border border-white/20 shadow-sm"
                : "text-white/50 hover:text-white/80 border border-transparent"
            }`}
          >
            <Icon size={12} weight={isActive ? "fill" : "bold"} />
            {label}
          </button>
        );
      })}
    </div>
  );
};
