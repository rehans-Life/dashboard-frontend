import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[500]}
      ></Typography>
    </Box>
  );
}
