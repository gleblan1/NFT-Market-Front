import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles<{ collection: string }>()(({}, { collection }) => ({
  container: {
    width: '100%',
    maxWidth: '100%',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '0 35px 35px 35px',
    height: '30vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7)), url(${collection})`,
    backgroundSize: 'cover',
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Raleway, sans-serif',
  },
  button: {
    height: 50, 
    fontSize: '23px',
    marginRight: '10px'
  }
}));