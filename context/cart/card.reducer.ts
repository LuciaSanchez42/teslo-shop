import { CartItem } from '../../ts'
import { CartState } from './cart.provider'

type CartActionType =
  | { type: 'CARD - cart from cookies'; payload: CartItem[] }
  | { type: 'CARD - add product'; payload: CartItem }
  | { type: 'CARD - remove product'; payload: string }
  | { type: 'CARD - clear cart' }
  | { type: 'CARD - update products'; payload: CartItem[] }
export const cartReducer = (state: CartState, action: CartActionType): CartState => {
  switch (action.type) {
    case 'CARD - cart from cookies':
      return {
        ...state
      }
    case 'CARD - add product':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'CARD - update products':
      return {
        ...state,
        cart: action.payload
      }
    default:
      return state
  }
}
