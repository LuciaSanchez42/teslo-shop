import { createContext } from 'react'
import { CartItem } from '../../ts'

interface ContextProps {
  cart: CartItem[]
  // addToCart: (item: CartItem) => void
  // removeFromCart: (id: string) => void
  // clearCart: () => void
}
export const CartContext = createContext({} as ContextProps)
