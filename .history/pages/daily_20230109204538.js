import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";

export default function Daily() {
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  return <div>Daily</div>;
}
