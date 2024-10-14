import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles()(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    }
}));