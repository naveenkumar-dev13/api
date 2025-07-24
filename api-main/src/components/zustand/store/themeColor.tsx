import { create } from "zustand";

interface ThemeColorState {
  Toggle: boolean;
  setToggle: () => void;
}

const useToggleStore = create<ThemeColorState>((set, get) => ({
  Toggle: false,
  setToggle: () => {
    const { Toggle } = get();
    set({ Toggle: !Toggle });
  },
}));

export default useToggleStore;
