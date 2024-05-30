import { zustandStorage } from '@/libs/mmkv/zustand';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface useThemeStoreProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  clearTheme: () => void;
}

export const useThemeStore = create<useThemeStoreProps>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme: 'light' | 'dark') => set({ theme: theme }),
      clearTheme: () => set({ theme: 'light' })
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => zustandStorage)
    }
  )
);
