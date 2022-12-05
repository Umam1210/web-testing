import create from 'zustand';

export const webinarsStore = create((set) => ({
  webinarList: [],

  setWebinarList: (callback) =>
      set(() => ({ webinarList: callback }))
}));
