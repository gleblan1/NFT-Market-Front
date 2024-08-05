import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles()((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.background.default,
    backdropFilter: 'blur(20px)',
    zIndex: 1,
    overflow: 'hidden',
    textAlign: 'center'
  },
  loadingText: {
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      animation: 'loading 1.5s infinite',
      position: 'absolute',
      width: '100%',
      left: 0,
      top: 0,
      textAlign: 'center'
    }
  }
}));
