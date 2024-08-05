import React from 'react'
import './material-theme.d'
import { GlobalStyles, useTheme } from '@mui/material'

export const CommonStyles = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        '::placeholder': {
          opacity: '1 !important',
          fontWeight: '400 !important'
        },
        '*::-webkit-scrollbar-track': {
          borderRadius: theme.palette.units.single,
          backgroundColor: 'transparent'
        },
        '*::-webkit-scrollbar-thumb': {
          border: 'none !important',
          borderRadius: theme.palette.units.single
        },
        '*::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent',
          borderColor: 'transparent'
        },
        '*::-webkit-scrollbar': {
          width: theme.palette.units.single,
          height: theme.palette.units.single,
          backgroundColor: 'transparent'
        },
        'html, #root': {
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontSize: '16px'
        },
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }
      }}
    />
  )
}

export const GlobalStyle = () => <CommonStyles />
