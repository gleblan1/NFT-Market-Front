import React from "react";
import { Box, Input } from "@mui/material";
import { useClasses } from "./Search.style";
import { SearchProps } from "./Search.types";

export const Search: React.FC<SearchProps> = ({SearchHandler}) => {
  const {classes} = useClasses();

  return (
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {SearchHandler(e.target.value)}}
        placeholder="Search"
        disableUnderline
        className={classes.search}
      />
    </Box>
  );
}
