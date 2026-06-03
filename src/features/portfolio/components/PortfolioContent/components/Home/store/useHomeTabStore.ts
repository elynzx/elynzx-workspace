import { create } from "zustand";
import type { HomeTab } from "../data/homeTabsData";

interface HomeTabState {
  activeTab: HomeTab;
  isTabClicked: boolean;
  setActiveTab: (tab: HomeTab) => void;
  setTabClicked: (clicked: boolean) => void;
}

export const useHomeTabStore = create<HomeTabState>((set) => ({
  activeTab: "overview",
  isTabClicked: false,
  setActiveTab: (tab) => set({ activeTab: tab }),
  setTabClicked: (clicked) => set({ isTabClicked: clicked }),
}));
