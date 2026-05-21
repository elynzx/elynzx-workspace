import { create } from "zustand";

interface WorkspaceState {
  isIdCardOpen: boolean;
  isPortfolioOpen: boolean;
  isMusicOpen: boolean;
  isTasksOpen: boolean;
  toggleIdCard: () => void;
  togglePortfolio: () => void;
  toggleMusic: () => void;
  toggleTasks: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  isIdCardOpen: true,
  isPortfolioOpen: false,
  isMusicOpen: false,
  isTasksOpen: false,

  toggleIdCard: () => set((state) => ({ isIdCardOpen: !state.isIdCardOpen })),
  togglePortfolio: () =>
    set((state) => ({ isPortfolioOpen: !state.isPortfolioOpen })),
  toggleMusic: () => set((state) => ({ isMusicOpen: !state.isMusicOpen })),
  toggleTasks: () => set((state) => ({ isTasksOpen: !state.isTasksOpen })),
}));
