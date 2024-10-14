export interface Wallet {
  address$: string
  updateAddress: (address$: string) => void
}