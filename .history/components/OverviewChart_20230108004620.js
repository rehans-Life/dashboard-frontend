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

  // Now i also need to format the data that im getting from
  // my backend to be able to insert it into my line graphy
  // cause they require a specific format.
  // [
  //   {
  //    id:"Id of the line which is also going to be its legend",
  //    color:'color of the line'
  //    data:[] # This is going to store the coordinates which
  //    are going to be placed on the grpah to form the line.
  // }
  //]
  // The coorindates are going to be objects with keys x and y
  // representing the x and y coordinates.

  // I'll be formating the data inside of a useMemo hook
  // so we dont unnecessarily reformat the data upon
  // each state update we can just store the formatted
  // data inside of the cache and upon each state update
  // just return that.

  // So basically initially when the function runs its going to
  // be ran with empty data cause the API call isnt going to be
  // made until the component loads in

  // So i need to tell useMemo to run the function inside of
  // it when the data changes.

  const formattedData = useMemo(() => {
    // I return an empty array when data is empty
    if (!data) {
      return [];
    }
    // Then when the second time this function runs with the
    // data inside of it we return the actual formatted data.
    const { monthlyData } = data;
  }, [data]);

  return <div>OverviewChart</div>;
}
