import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles<{isScrolledToTop: boolean}>()(({palette}, { isScrolledToTop }) => ({
    paper: {
        height: 9,
    },
    text: {
        fontSize: '0.875rem',
        fontWeight: 500,
        fontFamily: 'Raleway, sans-serif',
        color: palette.primary.contrastText
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
        backgroundColor: isScrolledToTop ? palette.background.default : palette.background.default,
        transition: 'background-color 0.3s ease',
    },
}));