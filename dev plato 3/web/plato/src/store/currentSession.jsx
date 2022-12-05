import create from 'zustand'

export const useCurrentSession = create((set) => ({
  session: {
    title: "",
    subtitle: "",
    type: "",
    files: [{uri: ""}]
  },
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
setCurrentSession: now => set((state) => ({
    session: {
        ...state.session,
        title: now.title,
        subtitle: now.subtitle,
        type: now.type,
        files: now.files
    }
}))
}))