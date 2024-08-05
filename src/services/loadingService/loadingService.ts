import { create } from 'zustand'
import { Loading } from './loadingService.types'

export const useLoading = create<Loading>((set) => ({
  isLoading: false,
  loadingText: 'Loading',
  setIsLoading: async (bool, text) => {
    set({ isLoading: bool, loadingText: text });
  }
}))
