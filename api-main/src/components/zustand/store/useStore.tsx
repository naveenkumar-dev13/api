// src/store/useBearStore.js
import { create } from "zustand";
interface BearState {
  count: number;
  inc: () => void;
  dec: () => void;
  reset:()=>void
} 

const useBearStore = create<BearState>((set, get) => ({
  count: 0,
  inc: () => {
    const { count } = get();
    if(count ===9 ) return
    set({ count: count + 1 });
  },
  dec: () => {
    const { count } = get();
    if(count ===0 ) return
    set({ count: count - 1 });
  },
  reset:()=>{
    set({ count: 0 });
  }
}));

export default useBearStore;
