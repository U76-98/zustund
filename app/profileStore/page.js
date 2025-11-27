import { create } from "zustand";

const profileStore = create((set) => ({
  profiles: [],

  addProfile: (profile) =>
    set((state) => ({
      profiles: [...state.profiles, profile],
    })),
}));

export default profileStore;
