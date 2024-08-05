import {makeStyles} from "tss-react/mui";

export const useClasses = makeStyles()(() => ({
    container: {
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column", 
      height: "59vh", 
      gap: 50,
      marginTop: '25vh'
    },
}));