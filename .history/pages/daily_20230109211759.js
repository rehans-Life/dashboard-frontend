import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";

export default function Daily() {
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  const formattedData = useMemo(() => {
    if (!data) return [];
    const { dailyData } = data;
    const totalSalesLine = {
      id: "TotalSales",
      color: theme.palette.secondary.main,
      data: dailyData.map(({ date, totalSales }) => ({
        x: date,
        y: totalSales,
      })),
    };
    const totalUnitsLine = {
      id: "TotalUnits",
      color: theme.palette.secondary[600],
      data: dailyData.map(({ date, totalUnits }) => ({
        x: date,
        y: totalUnits,
      })),
    };
    return [totalUnitsLine, totalSalesLine];
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DAILY SALES" subtitle="Chart of daily sales" />
    </Box>
  );
}
