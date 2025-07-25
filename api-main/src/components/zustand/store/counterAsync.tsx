
import { create } from "zustand";

interface CounterStore {
  count: number;
  loading: boolean;
  incrementDelay: () => Promise<void>;
}
//  const [loading, setloading] =useState(false);
export const useCounterStore = create<CounterStore>((set, get) => ({
  count: 0,
  loading: false,
  incrementDelay: async () => {
    set({ loading: true });
    await new Promise((res) => setTimeout(res, 4000));
    const { count } = get();
    set({ count: count + 1, loading: false });
  },
}));
