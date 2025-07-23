import { create } from "zustand";

interface ThemeColorState {
  Toggle: boolean;
  setToggle: () => void;
}

const useToggleStore = create<ThemeColorState>((set, get) => ({
  Toggle: false,
  setToggle:()=>{
    const { Toggle } = get();
    set({ Toggle: !Toggle });
  }
//   setToggle: () => set({ Toggle: !get().Toggle }),

}));

export default useToggleStore;
