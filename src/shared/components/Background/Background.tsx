import { useWorkspaceStore } from "../../../store/useWorkspaceStore";
import { DarkBackground } from "./DarkBackground";
import { LightBackground } from "./LightBackground";

export const Background = () => {
  const themeMode = useWorkspaceStore((state) => state.themeMode);

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none no-invert transition-colors duration-500 ${
        themeMode === "light" ? "bg-[#f1dfeb]" : "bg-[#321150]"
      }`}
    >
      {themeMode === "light" ? <LightBackground /> : <DarkBackground />}
    </div>
  );
};
