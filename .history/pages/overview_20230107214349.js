import React from "react";
import { useGetSalesQuery } from "../redux/api";
import { InputLevel, FormControl, Box, Select, MenuItem } from "@mui/material";
import Header from "../components/Header";

export default function Overview() {
  // Using the query method to make request to the sales/sales route
  // to get the overallStats data.
  const {data} = useGetSalesQuery();
  console.log(data);
  return (
    <Box>
          <Header
      title="OVERVIEW"
      subtitle="Overview of general revenue and profit"
    />
    <Box height='75vh'></Box>
    </Box>
  );
}
