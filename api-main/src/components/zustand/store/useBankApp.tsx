import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BankStore {
  balance: number;
  setCustomerName: (name: string) => void;
  accountNumber: number | null;
  customer: string | null;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
  reset: () => void;
}

export const useBankApp = create<BankStore>()(
  persist(
    (set, get) => ({
      balance: 0,
      customer: null,
      accountNumber: null,

      setCustomerName: (name) => {
        const generateNumber = Math.floor(Math.random() * 1000000);
        set({ customer: name, accountNumber: generateNumber });
      },

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
        set({ balance: 0, customer: null, accountNumber: null });
      },
    }),
    {
      name: "bank-storage",
    }
  )
);