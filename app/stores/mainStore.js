import create from 'zustand'

export const useStore = create((set) => ({
    activePair: 'yupi',
    changeActivePair: (team, opp) => set((state) => ({activePair: `${team} & ${opp}`}))
    // activeTable: 'total_points'
}))

