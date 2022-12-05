import create from 'zustand';
import { devtools } from 'zustand/middleware'

export const useUsersList = create(devtools((set) => ({
    users: [],
    tabs: {
        allTabs: true,
        activeTabs: false,
        suspendedTabs: false,
        graduatedTabs: false,
        inactiveTabs: false
    },
    setAllUsers: callback => {
        set(() => {
            return { users: callback}
        })
    },
    setActiveTabs: (payload) => {
        set(() => {
            return { tabs: payload}
        })
    }
})))