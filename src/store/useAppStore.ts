import { create } from "zustand";

interface AppState {
  theme: "dark" | "light";
  commandPaletteOpen: boolean;
  mobileMenuOpen: boolean;
  toggleTheme: () => void;
  setTheme: (theme: "dark" | "light") => void;
  setCommandPaletteOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

const getInitialTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("cykruit-theme");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
};

export const useAppStore = create<AppState>((set) => ({
  theme: getInitialTheme(),
  commandPaletteOpen: false,
  mobileMenuOpen: false,

  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("cykruit-theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return { theme: next };
    }),

  setTheme: (theme) => {
    localStorage.setItem("cykruit-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    set({ theme });
  },

  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
}));
