import { IUiState } from './ui.provider'

interface IUiActionType {
  type: 'UI - toggleMenu'
}

export const uiReducer = (state: IUiState, action: IUiActionType) => {
  switch (action.type) {
    case 'UI - toggleMenu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }
    default:
      return state
  }
}
