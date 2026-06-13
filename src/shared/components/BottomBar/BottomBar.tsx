import { DockItem } from "./components/DockItem";
import { useBottomBar } from "./hooks/useBottomBar";

export const BottomBar = () => {
  const { dockItems } = useBottomBar();

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] sm:w-[65%] md:w-auto">
      <div
        className="flex items-center justify-center gap-3 md:gap-6 px-4 md:px-18 py-2 md:py-3 bg-ui-glass/20 backdrop-blur-2xl rounded-3xl md:rounded-full shadow-[0_15px_30px_rgba(122,100,223,0.10)] ring-1 ring-ui-border"
      >
        {dockItems.map((item) => (
          <DockItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
