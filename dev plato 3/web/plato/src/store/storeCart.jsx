import create from 'zustand';

export const storeCart = create((set) => ({
  cartList: [],

  setCartList: (callback) =>
    // return state;
    set((state) => ({ cartList: [...state.cartList, callback] }))
}));
