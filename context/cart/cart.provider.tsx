import { FC, ReactNode, useReducer, useState } from 'react'
import { CartItem } from '../../ts'
import { cartReducer } from './card.reducer'
import { CartContext } from './cart.context'

export interface CartState {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  // removeFromCart: (id: string) => void
  // clearCart: () => void
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  addToCart: () => {}
}

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)
  const addToCart = (item: CartItem) => {
    const productInCart = state.cart.some((cartItem) => cartItem._id === item._id && cartItem.size === item.size)
    if (!productInCart) return dispatch({ type: 'CARD - add product', payload: item })
    const updatedCart = state.cart.map((cartItem) => {
      if (cartItem._id === item._id && cartItem.size === item.size) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    dispatch({ type: 'CARD - update products', payload: updatedCart })
  }
  return <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>
}
