import { createContext } from 'react'

interface uiContext {
  isMenuOpen: boolean
  toggleMenu: () => void
}
export const UiContext = createContext({} as uiContext)
