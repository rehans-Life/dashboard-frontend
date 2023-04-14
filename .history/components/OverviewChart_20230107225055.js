import React, { useMemo } from "react";

// Importing the line grpah component from nivo charts
// to implement the graph inside of this component
import { ResponsiveLine } from "@nivo/line";

// For providing the graph line chart the colors of our
// choice and apply dark and light mode on it.
import { useTheme } from "@mui/material";

// Importing the query method to get the overStats data to display
// on our page.
import { useGetSalesQuery } from "../redux/api";

//

export default function OverviewChart({ isDashboard = false, view }) {
  // Using the query method to make request to the sales/sales route
  // to get the overallStats data thats going to be inputted inside
  // of our line graph.
  const { data } = useGetSalesQuery();
  return <div>OverviewChart</div>;
}
