import { IdCard } from "../../features/idCard/IdCard";
import { MusicPlayer } from "../../features/music-player/MusicPlayer/MusicPlayer";
import { Portfolio } from "../../features/portfolio/Portfolio";
import { useWorkspaceStore } from "../../store/useWorkspaceStore";
import { Background } from "../components/Background/Background";
import { BottomBar } from "../components/BottomBar/BottomBar";
import { TopMenuBar } from "../components/TopMenuBar/TopMenuBar";

export const DisplayLayout = () => {
  const isAppOpen = useWorkspaceStore((state) => state.isAppOpen);

  return (
    <div className="w-screen h-screen relative overflow-hidden select-none">
      <Background />
      <TopMenuBar />
      <main className="absolute inset-0 top-12 bottom-20 w-full h-[calc(100vh-8rem)] p-4 overflow-hidden pointer-events-none">
        {isAppOpen.IdCard && <IdCard />}
        <div className={isAppOpen.MusicPlayer ? "block" : "hidden"}>
          <MusicPlayer />
        </div>
        <Portfolio />
      </main>
      <BottomBar />
    </div>
  );
};
