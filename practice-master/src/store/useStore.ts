import { create } from 'zustand'

interface UseStore {
  count: number;
  setCount: () => void;
  setDecrementCount: () => void;

}

export const useStore = create<UseStore>((set, get) => ({
  count: 0,
  setCount: () => {
    const { count } = get();
    if(count === 9) return;
    set({ count: count + 1 });
  },
  setDecrementCount:()=>{
    const { count } = get();
    if(count === 0) return;
    set({ count: count - 1 });
  },
  
}));
 