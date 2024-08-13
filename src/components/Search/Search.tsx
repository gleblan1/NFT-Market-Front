import React, { FC } from "react";
import { Box, Input, Stack } from "@mui/material";
import { useClasses } from "./Search.style";
import { SearchProps } from "./Search.types";

export const Search: FC<SearchProps> = ({searchHandler}) => {
  const {classes} = useClasses();

  function handler(e: React.ChangeEvent<HTMLInputElement>) {
    return searchHandler(e.target.value)
  }

  return (
    <Stack justifyContent={'center'} width={'100%'}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handler(e)}}
        placeholder="Search"
        disableUnderline
        className={classes.search}
      />
    </Stack>
  );
}
