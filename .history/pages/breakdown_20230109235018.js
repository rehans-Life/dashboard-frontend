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
  }, [data]);
  console.log(data.salesByCategory);
  return <Box><Header title="BREAKDOWN" subtitle='Breakdown of Sales By Category'/></Box>
}
