import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles()(({palette}) => ({
  container: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: palette.background.default,
    backdropFilter: 'blur(20px)',
    zIndex: 1,
    overflow: 'hidden',
    textAlign: 'center'
  },
}));
