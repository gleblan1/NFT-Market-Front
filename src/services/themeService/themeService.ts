import { create } from 'zustand'
import { ThemeService } from './themeService.types'

export const useTheme= create<ThemeService>((set) => ({
  isLight: false,
  setTheme: async (bool) => {
    set({ isLight: bool });
  }
}))
