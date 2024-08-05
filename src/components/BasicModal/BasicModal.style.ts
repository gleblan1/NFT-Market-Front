import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles()((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.default,
    border: '2px solid #000',
    boxShadow: '24',
    padding: '20px',
  },
  button: {
    color: theme.palette.primary.contrastText
  }
}));
