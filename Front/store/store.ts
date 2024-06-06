import { create } from 'zustand';

interface SubscriptionStoreState {
  willSubscriptionEnd: boolean;
  setWillSubscriptionEnd: (value: boolean) => void;
}

export const useSubscriptionStore = create<SubscriptionStoreState>((set) => ({
  willSubscriptionEnd: false,
  setWillSubscriptionEnd: (value: boolean) =>
    set({ willSubscriptionEnd: value }),
}));
