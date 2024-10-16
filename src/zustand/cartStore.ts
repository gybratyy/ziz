import { create } from 'zustand';
import {createJSONStorage, persist } from 'zustand/middleware';
import { CartState, ProductItem } from '@/types';

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product: ProductItem) => {
                set((state) => {
                    const existingProduct = state.cart.find((item) => item.id === product.id);
                    if (existingProduct) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + product.quantity }
                                    : item
                            ),
                        };
                    } else {
                        return {
                            cart: [...state.cart, product],
                        };
                    }
                });
            },

            removeFromCart: (id: number) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                }));
            },


            changeQuantity: (id: number, quantity: number) => {
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id ? { ...item, quantity } : item
                    ),
                }));
            },
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);