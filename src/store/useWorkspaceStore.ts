import { create } from "zustand";

export type AppName =
  | "IdCard"
  | "Portfolio"
  | "MusicPlayer"
  | "Tasks";

export type ThemeMode = "dark" | "light";

interface WorkspaceState {
  isAppOpen: Record<AppName, boolean>;
  activeApp: AppName;
  themeMode: ThemeMode;
  toggleApp: (appName: AppName) => void;
  focusApp: (appName: AppName) => void;
  toggleTheme: () => void;
  initMode: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  isAppOpen: {
    IdCard: true,
    Portfolio: true,
    MusicPlayer: false,
    Tasks: false,
  },
  activeApp: "IdCard",
  themeMode: (localStorage.getItem("theme") as ThemeMode) || "dark",

  toggleApp: (appName) =>
    set((state) => ({
      isAppOpen: {
        ...state.isAppOpen,
        [appName]: !state.isAppOpen[appName],
      },
    })),

  focusApp: (appName) =>
    set((state) =>
      state.activeApp === appName ? state : { activeApp: appName },
    ),

  toggleTheme: () =>
    set((state) => {
      const toggleTheme: ThemeMode =
        state.themeMode === "dark" ? "light" : "dark";
      const root = window.document.documentElement;
      if (toggleTheme === "light") {
        root.classList.add("light");
      } else {
        root.classList.remove("light");
      }
      localStorage.setItem("theme", toggleTheme);
      return { themeMode: toggleTheme };
    }),

  initMode: () => {
    const actualTheme = localStorage.getItem("theme") || "dark";
    const root = window.document.documentElement;
    if (actualTheme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  },
}));
