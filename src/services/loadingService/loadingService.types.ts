export interface Loading{
  isLoading: boolean,
  loadingText: string,
  setIsLoading: (bool: boolean, text: string) => void
}