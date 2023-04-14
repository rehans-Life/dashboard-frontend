import React, { useMemo } from "react";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";
// Again we will be using the pie chart being displayed here
// in the dashboard page as well therefore ill create one component
// which im going to render on both the pages.
import BreakdownChart from "../components/BreakdownChart";

export default function Breakdown() {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
}