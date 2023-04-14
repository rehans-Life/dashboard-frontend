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
    return Object.entries(data.salesByCategory).forEach(
      ([category, sales]) => ({
        id: category,
        label: category,
        value: sales,
        color: theme.palette.secondary[400],
      })
    );
  }, [data]);
  console.log(formattedData);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
    </Box>
  );
}
