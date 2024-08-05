import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles()((theme) => ({
    search: {
      width: '100%',
      borderRadius: '20px',
      border: `2px solid ${theme.palette.primary.contrastText}`,
      color: theme.palette.primary.contrastText,
      padding: '10px 20px',
      '& .MuiInputBase-input': {
        padding: '10px 0',
      },
    }
}));