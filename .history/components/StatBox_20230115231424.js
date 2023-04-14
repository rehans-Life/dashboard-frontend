import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

export default function StatBox({ title, value, increase, icon, description }) {
  const theme = useTheme();
  return <Box 
  // This grid item is going to span through two columns
  gridColumn="span-2"
  // Its going to span by 1 row
  gridRow="span 1"
  // Setting display as Flex
  display='flex'
  // Setting Up Direction as Column
  flexDirection='column'
  // In flex direction column justify content will align items by
  // y axis.
  justifyContent='space-between'
  p="1.25rem 1rem"
  flex="1"
  ></Box>>
}
