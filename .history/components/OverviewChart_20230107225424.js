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

// Our overviewChart component along with its graph is going to
// be shown two places one is the overview page and second is the
// main dashboard

// In the main dashboard page i need to adjust its size so in
// that case ill pass in a isDashboard prop.

export default function OverviewChart({ isDashboard = false, view }) {
  // Using the query method to make request to the sales/sales route
  // to get the overallStats data thats going to be inputted inside
  // of our line graph.
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  return <div>OverviewChart</div>;
}
