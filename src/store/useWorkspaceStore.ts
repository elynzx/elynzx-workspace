import { create } from "zustand";

interface WorkspaceState {
  isIdCardOpen: boolean;
  isPortfolioOpen: boolean;
  isMusicOpen: boolean;
  isTasksOpen: boolean;
  isSpecsOpen: boolean;
  isContactOpen: boolean;
  toggleIdCard: () => void;
  togglePortfolio: () => void;
  toggleMusic: () => void;
  toggleTasks: () => void;
  toggleSpecs: () => void;
  toggleContact: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  isIdCardOpen: false,
  isPortfolioOpen: true,
  isMusicOpen: false,
  isTasksOpen: false,
  isSpecsOpen: false,
  isContactOpen: false,

  toggleIdCard: () => set((state) => ({ isIdCardOpen: !state.isIdCardOpen })),
  togglePortfolio: () =>
    set((state) => ({ isPortfolioOpen: !state.isPortfolioOpen })),
  toggleMusic: () => set((state) => ({ isMusicOpen: !state.isMusicOpen })),
  toggleTasks: () => set((state) => ({ isTasksOpen: !state.isTasksOpen })),
  toggleSpecs: () => set((state) => ({ isSpecsOpen: !state.isSpecsOpen })),
  toggleContact: () =>
    set((state) => ({ isContactOpen: !state.isContactOpen })),
}));
