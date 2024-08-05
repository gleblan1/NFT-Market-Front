import { makeStyles } from "tss-react/mui";

export const useClasses = makeStyles()((theme) => ({
  card: {
    position: 'relative',
    borderRadius: 37,
    overflow: 'hidden',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
    },
  },
  cardMedia: {
    transition: '0.3s ease',
    filter: 'brightness(100%)',
    '&:hover': {
      filter: 'brightness(70%)',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: '0.3s ease',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      opacity: 1,
    },
  },
  button: {
    borderRadius: 5,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.default
  },
}));
