import { CartItem } from '../../ts'
import { CartState } from './cart.provider'

type CartActionType =
  | { type: 'CARD - cart from cookies'; payload: CartItem[] }
  | { type: 'CARD - add product'; payload: CartItem }
export const cartReducer = (state: CartState, action: CartActionType): CartState => {
  switch (action.type) {
    case 'CARD - cart from cookies':
      return {
        ...state
      }
    default:
      return state
  }
}
