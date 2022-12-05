import create from 'zustand';

export const storeSellCourses = create((set) => ({
  courseList: [],

  setCourseList: (callback) =>
    // return state;
    set(() => ({ courseList: callback }))
}));
