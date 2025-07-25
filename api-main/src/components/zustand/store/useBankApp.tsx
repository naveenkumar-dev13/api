import { create } from "zustand";

interface BankStore {
  balance: number;
  setCustomerName: (name: string) => void;
  customer: string | null;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  reset: () => void;
}

export const useBankApp = create<BankStore>((set, get) => ({
  balance: 0,
  customer: null,
  setCustomerName: (name) => set({ customer: name }),
  deposit: (amount: number) => {
    const { balance } = get();
    if (amount > 0) {
      set({ balance: balance + amount });
    }
  },
  withdraw: (amount: number) => {
    const { balance } = get();
    if (amount > balance) return;
    if (amount <= 0) {
      alert("Withdraw amount must be greater than 0");
      return;
    }
    set({ balance: balance - amount });
  },
  reset: () => {
    set({ balance: 0 });
  },
}));
