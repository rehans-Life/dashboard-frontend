import React from "react";
import { useGetSalesQuery } from "../redux/api";
import { InputLevel, FormControl, Box, Select, MenuItem } from "@mui/material";
import Header from "../components/Header";
export default function Overview() {
  const sales = useGetSalesQuery();
  return <div>Overview</div>;
}
