import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  email: undefined,
  error: undefined,
  setUser: (user) => {
    // Verify with server
    if (user.email === "a@a.com") {
      set({ ...user, error: undefined });
    } else {
      set({ error: "User not found!" });
    }
  },
}));
