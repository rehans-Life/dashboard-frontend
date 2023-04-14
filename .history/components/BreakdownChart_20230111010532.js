import React, { useMemo } from "react";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";

export default function BreakdownChart({ isDashboard = False }) {
  const theme = useTheme();

  const { data } = useGetSalesQuery();

  const formattedData = useMemo(() => {
    if (!data) return [];
    const { salesByCategory } = data;
    return Object.entries(salesByCategory).map(([category, sales], index) => ({
      id: category,
      label: category,
      value: sales,
      color:
        index % 2 === 0
          ? theme.palette.secondary[500]
          : theme.palette.secondary[300],
    }));
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(formattedData);
  return <Box 
  height={isDashboard ? "400px" : "100px"}
  width={undefined}
  minHeight={isDashboard ? "325px" : undefined}
  minWidth={isDashboard ? "325px" : undefined}
  // We are going to have its position relative cause we are going
  // to have a certain element to positioned absolute so that we can 
  // add text in the middle of the pie chart.
  position="relative"
  ></Box>;
}
