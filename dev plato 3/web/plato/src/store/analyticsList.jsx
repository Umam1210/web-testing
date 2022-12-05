import create from 'zustand';
import { devtools } from 'zustand/middleware'

export const useAnalyticList = create(devtools((set) => ({
    users: [],
    tabs: {
        userTabs: true,
        salesTabs: false,
        courseTabs: false,
        teacherTabs: false,
    },
    // setAllUsers: callback => {
    //     set(() => {
    //         return { users: callback}
    //     })
    // },
    setActiveTabs: (payload) => {
        set(() => {
            return { tabs: payload}
        })
    }
})))