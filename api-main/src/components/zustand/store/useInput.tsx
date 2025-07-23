import { create } from "zustand";

interface InputStore {
  value: string;
  setValue: (val: string) => void;
  reset: () => void;
}

export const useInput = create<InputStore>((set, get) => ({
  value: "",
  setValue: () => {
    const { value } = get();
    set({ value: value });
  },
  reset: () => set({ value: "" }),
}));
