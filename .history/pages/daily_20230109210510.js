import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";

export default function Daily() {
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  const formatedData = useMemo(() => {
    const {dailyData} = data
    const totalSalesLine = {
      id: "TotalSales",
      color: theme.palette.secondary.main,
      data: ,
    };
    const totalUnitsLine = {
      id: "TotalUnits",
      color: theme.palette.secondary[600],
      data: [],
    };
  }, [data]);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DAILY SALES" subtitle="Chart of daily sales" />
    </Box>
  );
}
