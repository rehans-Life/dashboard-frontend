import React from "react";
import { useGetSalesQuery } from "../redux/api";
import { InputLevel, FormControl, Box, Select, MenuItem } from "@mui/material";
export default function Overview() {
  const sales = useGetSalesqUERY();
  return <div>Overview</div>;
}
