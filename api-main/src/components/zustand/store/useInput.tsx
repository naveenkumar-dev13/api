import { create } from "zustand";

interface InputStore {
  value: string;
  setValue: (val: string) => void;
  reset: () => void;
}

export const useInput = create<InputStore>((set, get) => ({
  value: "",
  setValue: (val) => set({ value: val }),
  reset: () => set({ value: "" }),
}));
