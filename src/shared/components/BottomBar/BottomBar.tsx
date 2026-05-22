import { DockItem } from "./components/DockItem";
import { useBottomBar } from "./hooks/useBottomBar";

export const BottomBar = () => {
  const { dockItems } = useBottomBar();

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[65%] md:w-auto">
      <div className="flex items-center justify-center gap-2 md:gap-6 px-4 md:px-18 py-2 md:py-3 bg-white/40 backdrop-blur-2xl border border-white/30 rounded-4xl shadow-2xl">
        {dockItems.map((item) => (
          <DockItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
