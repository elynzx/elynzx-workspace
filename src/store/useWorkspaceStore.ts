import { create } from "zustand";

export type AppName =
  | "IdCard"
  | "Portfolio"
  | "Music"
  | "Tasks"
  | "Specs"
  | "Contact";

interface WorkspaceState {
  isIdCardOpen: boolean;
  isPortfolioOpen: boolean;
  isMusicOpen: boolean;
  isTasksOpen: boolean;
  isSpecsOpen: boolean;
  isContactOpen: boolean;
  activeApp: AppName;
  toggleIdCard: () => void;
  togglePortfolio: () => void;
  toggleMusic: () => void;
  toggleTasks: () => void;
  toggleSpecs: () => void;
  toggleContact: () => void;
  focusApp: (appName: AppName) => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  isIdCardOpen: true,
  isPortfolioOpen: true,
  isMusicOpen: false,
  isTasksOpen: false,
  isSpecsOpen: false,
  isContactOpen: false,
  activeApp: "IdCard",

  toggleIdCard: () => set((state) => ({ isIdCardOpen: !state.isIdCardOpen })),
  togglePortfolio: () =>
    set((state) => ({ isPortfolioOpen: !state.isPortfolioOpen })),
  toggleMusic: () => set((state) => ({ isMusicOpen: !state.isMusicOpen })),
  toggleTasks: () => set((state) => ({ isTasksOpen: !state.isTasksOpen })),
  toggleSpecs: () => set((state) => ({ isSpecsOpen: !state.isSpecsOpen })),
  toggleContact: () =>
    set((state) => ({ isContactOpen: !state.isContactOpen })),
  focusApp: (appName) =>
    set((state) => {
      if (state.activeApp === appName) {
        return state;
      }
      return { activeApp: appName };
    }),
}));
