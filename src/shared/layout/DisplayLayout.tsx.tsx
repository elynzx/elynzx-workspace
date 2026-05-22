import { IdCard } from "../../features/id-card/IdCard";
import { useWorkspaceStore } from "../../store/useWorkspaceStore";
import { BottomBar } from "../components/BottomBar/BottomBar";
import { TopMenuBar } from "../components/TopMenuBar/TopMenuBar";


export const DisplayLayout = () => {
  const { isIdCardOpen, isPortfolioOpen, isMusicOpen, isTasksOpen } = useWorkspaceStore();

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-linear-to-br from-bgDeepBlack to-rose-200 select-none">
      <TopMenuBar />

      <main className="absolute inset-0 top-10 bottom-20 w-full h-[calc(100vh-7.5rem)] p-4 overflow-hidden pointer-events-none">
        {isIdCardOpen && <IdCard />}
      </main>
      <BottomBar />
    </div>
  );
};
