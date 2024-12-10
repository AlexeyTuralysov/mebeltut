import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useStoreCart = create(persist(
  (set) => ({

    cartStore: [],


    addItemToCart: (item) => set((state) => {
      const existingItem = state.cartStore.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return {

          cartStore: state.cartStore.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };

      }
      else {
        return { cartStore: [...state.cartStore, { ...item, quantity: 1 }] };
      }

    }),

    removeToCart: (itemId) => set((state) => ({
      cartStore: state.cartStore.filter(item => item.id !== itemId),
    })),
  }),
    {
    name: "cart-store",
    getStorage: () => localStorage,
  }


));

export default useStoreCart;