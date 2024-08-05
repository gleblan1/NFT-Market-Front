import { createTheme } from '@mui/material/styles'

import colors from './colors'
import { units } from './units'

export const materialLightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 620,
      sm: 768,
      md: 920,
      lg: 1280,
      xl: 1440
    }
  },
  palette: {
    primary: {
      light: '#00796b',
      main: '#00695c',
      dark: '#004d40',
      contrastText: colors.contrastColorLight,
    },
    secondary: {
      light: '#26a69a',
      main: '#009688',
      dark: '#00897b',
      contrastText: colors.contrastColorLight,
    },
    background: {
      default: '#fff',
      paper: '#fff', 
    },
    customColors: colors,
    units: units
  },
  typography: {
    h1: {
      fontFamily: "Archivo Black",
      textTransform: 'none',
      color: colors.white
    },
    h2: {
      fontFamily: "Archivo Black",
      color: colors.primary
    },
    h3: {
      fontFamily: "Archivo Black",
      color: colors.primary
    },
    h4: {
      fontFamily: "Archivo Black",
      color: colors.primary
    },
    h5: {
      fontFamily: "Archivo Black",
      color: colors.primary
    },
    h6: {
      fontFamily: "Archivo Black",
      color: colors.contrastColorLight
    },
    subtitle1: {
      fontFamily: "Archivo Black",
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1,
      textTransform: 'none'
    },
    subtitle2: {
      fontFamily: "Archivo Black",
      fontWeight: 400,
      lineHeight: 1,
      fontSize: '0.75rem',
      textTransform: 'uppercase'
    },
    body1: {
      fontFamily: "Archivo Black",
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1,
      textTransform: 'none'
    },
    body2: {
      fontFamily: "Archivo Black",
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1,
      textTransform: 'none',
      color: colors.grey300
    },
    button: {
      fontFamily: "Archivo Black",
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1,
      textTransform: 'none',
      color: '#004d40'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.button, // Apply h4 typography styles to button text
        })
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'p',
          subtitle2: 'p',
          body1: 'span',
          body2: 'span'
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .Mui-checked.MuiSwitch-track': {
            backgroundColor: colors.cyan100
          },
          '& .MuiSwitch-track': {
            backgroundColor: colors.white
          },
          '& .MuiSwitch-input': {
            width: '100% !important',
            left: '0 !important'
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Archivo Black",
          fontWeight: 400,
          lineHeight: '0.75rem',
          fontSize: '0.75rem',
          height: '0.75rem',
          color: colors.primary,
          textDecorationColor: colors.primary,
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px',
          lineHeight: 1,
          color: colors.grey300,
          border: 'none',
          borderTop: '1px solid',
          height: '68px',
          borderColor: colors.bgDark2,
          textAlign: 'center'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            height: 'auto',
            borderTop: 0,
            textWrap: 'nowrap'
          },
          '& .MuiTableCell-head:first-of-type': {
            textAlign: 'left'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary
          },
          '& input': {
            lineHeight: 1,
            padding: '0 14px 0 0',
            color: colors.primary,
            fontFamily: "Archivo Black",
            fontSize: '0.9375rem',
            fontWeight: 400
          }
        },
        notchedOutline: {
          borderWidth: '1px !important',
          transition: '0.3s'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          width: '18px',
          height: '18px'
        }
      }
    }
  },
  spacing: units.single
});

// DARK THEME

export const materialDarkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 620,
      sm: 768,
      md: 920,
      lg: 1280,
      xl: 1440
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primaryTextDark,
      contrastText: colors.contrastColorDark,
    },
    secondary: {
      main: colors.secondaryTextDark,
      contrastText: colors.contrastColorDark,
    },
    background: {
      default: colors.bgDark1,
      paper: colors.bgDark2, 
    },
    customColors: colors,
    units: units,
  },
  typography: {
    h1: {
      fontFamily: "Archivo Black",
      textTransform: 'none',
      color: colors.bgDark1
    },
    h2: {
      fontFamily: "Archivo Black",
      color: colors.primary
    },
    h3: {
      fontFamily: "Archivo Black",
      color: colors.contrastColorDark
    },
    h4: {
      fontFamily: "Archivo Black",
      color: colors.primary
    },
    h5: {
      fontFamily: "Archivo Black",
      color: colors.primary
    },
    h6: {
      fontFamily: "Archivo Black",
      color: colors.contrastColorDark
    },
    subtitle1: {
      fontFamily: "Archivo Black",
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1,
      textTransform: 'none'
    },
    subtitle2: {
      fontFamily: "Archivo Black",
      fontWeight: 400,
      lineHeight: 1,
      fontSize: '0.75rem',
      textTransform: 'uppercase'
    },
    body1: {
      fontFamily: "Archivo Black",
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1,
      textTransform: 'none'
    },
    body2: {
      fontFamily: "Archivo Black",
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1,
      textTransform: 'none',
      color: colors.grey300
    },
    button: {
      fontFamily: "Archivo Black",
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1,
      textTransform: 'none',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.button, // Apply h4 typography styles to button text
        })
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'p',
          subtitle2: 'p',
          body1: 'span',
          body2: 'span'
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .Mui-checked.MuiSwitch-track': {
            backgroundColor: colors.cyan100
          },
          '& .MuiSwitch-track': {
            backgroundColor: colors.white
          },
          '& .MuiSwitch-input': {
            width: '100% !important',
            left: '0 !important'
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Archivo Black",
          fontWeight: 400,
          lineHeight: '0.75rem',
          fontSize: '0.75rem',
          height: '0.75rem',
          color: colors.primary,
          textDecorationColor: colors.primary,
          textDecoration: 'none',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px',
          lineHeight: 1,
          color: colors.grey300,
          border: 'none',
          borderTop: '1px solid',
          height: '68px',
          borderColor: colors.bgDark2,
          textAlign: 'center'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            height: 'auto',
            borderTop: 0,
            textWrap: 'nowrap'
          },
          '& .MuiTableCell-head:first-of-type': {
            textAlign: 'left'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary
          },
          '& input': {
            lineHeight: 1,
            padding: '0 14px 0 0',
            color: colors.primary,
            fontFamily: "Archivo Black",
            fontSize: '0.9375rem',
            fontWeight: 400
          }
        },
        notchedOutline: {
          borderWidth: '1px !important',
          transition: '0.3s'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          width: '18px',
          height: '18px'
        }
      }
    }
  },
  spacing: units.single
});