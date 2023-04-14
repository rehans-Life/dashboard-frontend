import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "../redux/api";
import { DataGrid } from "@mui/x-data-grid";

export default function Customers() {
  const { data } = useGetCustomersQuery();
  const theme = useTheme();

  console.log(data);

  return <div>Customers</div>;
}
