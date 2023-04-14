import React, { useMemo } from "react";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";

export default function BreakdownChart() {
  const theme = useTheme();
  const { data } = useGetSalesQuery();
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
  return <div>BreakdownChart</div>;
}
