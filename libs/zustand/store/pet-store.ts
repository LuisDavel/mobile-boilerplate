import { zustandStorage } from '@/libs/mmkv/zustand';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface usePetStoreProps {
  pet: {} | null;
  setPet: (pet: any) => void;
  clearTheme: () => void;
}

export const usePetStore = create<usePetStoreProps>()(
  persist(
    (set) => ({
      pet: null,
      setPet: (pet: {}) => set({ pet: pet }),
      clearTheme: () => set({ pet: null })
    }),
    {
      name: 'pet-storage',
      storage: createJSONStorage(() => zustandStorage)
    }
  )
);
