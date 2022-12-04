import { FC, ReactNode, useReducer, useState } from 'react'
import { UiContext } from './ui.context'
import { uiReducer } from './ui.reducer'

export interface IUiState {
  isMenuOpen: boolean
}
const UI_INITIAL_STATE: IUiState = {
  isMenuOpen: false
}
export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  const toggleMenu = () => {
    uiDispatch({ type: 'UI - toggleMenu' })
  }
  return <UiContext.Provider value={{ ...uiState, toggleMenu }}>{children}</UiContext.Provider>
}
