import create from 'zustand';
import { devtools } from 'zustand/middleware'

export const useForumList = create(devtools((set) => ({
    users: [],
    tabs: {
        postTabs: true,
        mediaTabs: false,
        linkTabs: false,
        pollTabs: false,
        talkTabs: false,
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