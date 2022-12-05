import { atom } from 'jotai';

// ? Sidebar Collapsed
let userToken = atom(localStorage.getItem('userToken'));

export const userTokenAtom = atom(
  (get) => get(userToken),
  (get, set, newToken) => {
    set(userToken, newToken);
    localStorage.setItem('userToken', newToken);
  }
);
