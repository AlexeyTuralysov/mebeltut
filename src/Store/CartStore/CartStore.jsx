import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useStoreCart = create(persist(
  (set ,get) => ({

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

    increaseQuantity: (itemId) => set((state) => ({
      cartStore: state.cartStore.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

    decreaseQuantity: (itemId) => set((state) => ({
      cartStore: state.cartStore.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),

    removeToCart: (itemId) => set((state) => ({
      cartStore: state.cartStore.filter(item => item.id !== itemId),
    })),
    clearCart: () => set({ cartStore: [] }),



    totatPrice: () => {
      const cart = get().cartStore;
      return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  }),
  {
    name: "cart-store",
    getStorage: () => localStorage,
  }


));

export default useStoreCart;