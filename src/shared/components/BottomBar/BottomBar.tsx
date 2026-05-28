import { DockItem } from "./components/DockItem";
import { useBottomBar } from "./hooks/useBottomBar";

export const BottomBar = () => {
  const { dockItems } = useBottomBar();

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] sm:w-[65%] md:w-auto">
      <div
        className="flex items-center justify-center gap-3 md:gap-6 px-4 md:px-18 py-2 md:py-3 bg-black/10
        backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-full shadow-[0_20px_50px_rgba(122,100,223,0.25)] 
        ring-1 ring-white/20"
      >
        {dockItems.map((item) => (
          <DockItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
