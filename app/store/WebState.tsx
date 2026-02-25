import { create } from "zustand";

type webState = {
  theme: "light" | "dark";
  rightBar: boolean;
  toggleTheme: () => void;
  toggleRightBar: () => void;
};

export const useWebState = create<webState>((set) => ({
  theme: "light",
  rightBar: false,

  toggleTheme() {
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }));
  },
  toggleRightBar() {
    set((state) => ({ rightBar: !state.rightBar }));
  },
}));
