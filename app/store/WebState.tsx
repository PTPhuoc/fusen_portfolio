import { create } from "zustand";

type webState = {
  theme: "light" | "dark";
  rightBar: boolean;
  loading: boolean;
  toggleTheme: () => void;
  toggleRightBar: () => void;
  toggleLoading: (isLoad: boolean) => void;
};

export const useWebState = create<webState>((set) => ({
  theme: "light",
  rightBar: false,
  loading: true,
  
  toggleTheme() {
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }));
  },
  toggleRightBar() {
    set((state) => ({ rightBar: !state.rightBar }));
  },
  toggleLoading(isLoad) {
    set(() => ({ loading: isLoad}));
  },
}));
