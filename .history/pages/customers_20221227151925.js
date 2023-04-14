import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "../redux/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";

export default function Customers() {
  const { data } = useGetCustomersQuery();
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box>
        <DataGrid loading={!data} rows={data || []} columns={columns || []} />
      </Box>
    </Box>
  );
}
