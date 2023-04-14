import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

export default function StatBox({ title, value, increase, icon, description }) {
  const theme = useTheme();
  return (
    <Box
      // This grid item is going to span through two columns
      gridColumn="span-2"
      // Its going to span by 1 row
      gridRow="span 1"
      // Setting display as Flex
      display="flex"
      // Setting Up Direction as Column
      flexDirection="column"
      // In flex direction column justify content will align items by
      // y axis.
      justifyContent="space-between"
      p="1.25rem 1rem"
      // Its going to take as much space as it can.
      flex="1"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      ></Typography>
    </Box>
  );
}
