import React, { useMemo } from "react";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";
// Again we will be using the pie chart being displayed here
// in the dashboard page as well therefore ill create one component
// which im going to render on both the pages.

export default function Breakdown() {
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  const formattedData = useMemo(() => {
    if (!data) return [];
    const { salesByCategory } = data;
    return Object.entries(salesByCategory).map(([category, sales]) => ({
      id: category,
      label: category,
      value: sales,
      color: theme.palette.secondary[400],
    }));
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(formattedData);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh"></Box>
    </Box>
  );
}
