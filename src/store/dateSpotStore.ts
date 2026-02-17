import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DateSpot {
  id: string;
  name: string;
  priceRange?: string;
  neighbourhood?: string;
  googleRatings?: number;
  cuisineTypes?: string;
}

interface DateSpotState {
  dateSpots: DateSpot[];
  currentSpot: DateSpot | null;
  isSpinning: boolean;
  hasSpun: boolean;
  addDateSpot: (spot: Omit<DateSpot, 'id'>) => void;
  removeDateSpot: (id: string) => void;
  updateDateSpot: (id: string, spot: Partial<Omit<DateSpot, 'id'>>) => void;
  spinWheel: () => void;
  resetWheel: () => void;
}

// Polyfill for crypto.randomUUID for older browsers
const generateUUID = (): string => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback UUID v4 generator for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const useDateSpotStore = create<DateSpotState>()(
  persist(
    (set, get) => ({
      dateSpots: [],
      currentSpot: null,
      isSpinning: false,
      hasSpun: false,

      addDateSpot: (spot) => {
        const newSpot: DateSpot = {
          ...spot,
          id: generateUUID(),
        };
        set((state) => ({
          dateSpots: [...state.dateSpots, newSpot],
        }));
      },

      removeDateSpot: (id) => {
        set((state) => ({
          dateSpots: state.dateSpots.filter((spot) => spot.id !== id),
          currentSpot: state.currentSpot?.id === id ? null : state.currentSpot,
        }));
      },

      updateDateSpot: (id, updates) => {
        set((state) => ({
          dateSpots: state.dateSpots.map((spot) =>
            spot.id === id ? { ...spot, ...updates } : spot
          ),
        }));
      },

      spinWheel: () => {
        const { dateSpots } = get();
        if (dateSpots.length === 0) return;

        set({ isSpinning: true });

        // Simulate spinning animation delay
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * dateSpots.length);
          set({
            currentSpot: dateSpots[randomIndex],
            isSpinning: false,
            hasSpun: true,
          });
        }, 6000); // 6 second spin duration
      },

      resetWheel: () => {
        set({
          currentSpot: null,
          isSpinning: false,
          hasSpun: false,
        });
      },
    }),
    {
      name: 'date-spot-storage',
      partialize: (state) => ({
        dateSpots: state.dateSpots,
      }),
    }
  )
);
