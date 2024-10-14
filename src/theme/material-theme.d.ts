import { Palette } from '@mui/material/styles'

import colors from './colors'
import { units } from './units'

declare module '@mui/material/styles' {
  export interface CustomPalette extends Palette {
    customColors: typeof colors
    units: typeof units
  }

  export interface PaletteOptions {
    customColors: typeof colors
    units: typeof units
  }

  export interface Theme {
    palette: CustomPalette
  }
}
