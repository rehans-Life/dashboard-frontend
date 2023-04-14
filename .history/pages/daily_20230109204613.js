import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";

export default function Daily() {
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  return <div>Daily</div>;
}
