import { create } from "zustand";

interface tabStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export const useTabStore = create<tabStore>((set) => ({
  activeTab: "Home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));