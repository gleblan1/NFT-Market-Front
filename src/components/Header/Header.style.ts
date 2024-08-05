import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles<{isScrolledToTop: boolean}>()((theme, { isScrolledToTop }) => ({
    paper: {
        h: 9,
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: 'Raleway, sans-serif',
        color: theme.palette.primary.contrastText
    },
    header: {
        width: "90%", 
        height: '100px',
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        borderRadius: '40px', 
        position: 'fixed', 
        padding: '0 3%',
        top: 15, 
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        backgroundColor: isScrolledToTop ? theme.palette.background.default : theme.palette.background.default,
        transition: 'background-color 0.3s ease',
    },
}));