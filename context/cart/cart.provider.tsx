import { FC, ReactNode, useReducer, useState } from 'react'
import { CartItem } from '../../ts'
import { cartReducer } from './card.reducer'
import { CartContext } from './cart.context'

export interface CartState {
  cart: CartItem[]
  // addToCart: (item: CartItem) => void
  // removeFromCart: (id: string) => void
  // clearCart: () => void
}

const CART_INITIAL_STATE: CartState = {
  cart: []
}

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  return <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
}
