import React, { useMemo } from "react";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";

export default function Breakdown() {
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  const formattedData = useMemo(() => {
    if (!data) return [];
    const { salesByCategory } = data;
    const breakdownData = Object.entries(data.salesByCategory).forEach(([category,sales])=>({
        id:category,
        label:category,
        value:sales,
        color:theme.secondary[400]
    }))
  }, [data]);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
    </Box>
  );
}
