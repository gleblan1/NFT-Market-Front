import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles()(() => ({
    container: {
        width: '80%',
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column", 
        height: "59vh", 
        gap: 2, 
        marginTop: '25vh'
    },
    article:{
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      flexDirection: "row",
      height: "50%", 
      marginBottom: "10%", 
      width: "80%"
    }
}));