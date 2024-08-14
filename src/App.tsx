import React, { useEffect } from "react"
import { ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { useWallet } from "@services/walletService"
import { materialDarkTheme, materialLightTheme } from "@theme/material-theme"
import { GlobalStyle } from "@theme/global-style"
import { useTheme } from "@services/themeService/themeService"

function App() {
  const {updateAddress} = useWallet()
  const {isLight} = useTheme();

  useEffect(() => {
      updateAddress((window as any).ethereum.request({ method: 'eth_requestAccounts' }));
  }, [])
  
  return (
      <ThemeProvider theme={isLight ? materialLightTheme : materialDarkTheme}>
        <GlobalStyle/>
          <RouterProvider router={router} />
      </ThemeProvider>
    
  )
}

export default App
