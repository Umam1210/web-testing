import { atom } from 'jotai';

// ? Sidebar Collapsed
let sidebarCollapsed = atom(localStorage.getItem('sidebarCollapsed') === 'true');

export const sidebarCollapsedAtom = atom(
  (get) => get(sidebarCollapsed),
  (get, set, newBoolean) => {
    set(sidebarCollapsed, newBoolean);
    localStorage.setItem('sidebarCollapsed', newBoolean);
  }
);

// ? Browser Language
let browserLanguage = atom(localStorage.getItem('browserLanguage') || 'id');

export const browserLanguageAtom = atom(
  (get) => get(browserLanguage),
  (get, set, newLanguage) => {
    set(browserLanguage, newLanguage);
    localStorage.setItem('browserLanguage', newLanguage);
  }
);

// ? Dark/Light Mode
let darkMode = atom(localStorage.getItem('darkMode') === 'true');

export const darkModeAtom = atom(
  (get) => get(darkMode),
  (get, set, newBoolean) => {
    set(darkMode, newBoolean);
    localStorage.setItem('darkMode', newBoolean);
  }
);

// ? Search modal toggle
export let searchModalVisible = atom(false);
