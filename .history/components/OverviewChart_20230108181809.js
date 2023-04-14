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

  // We are going to have two types of chats which the user
  // can choose from.

  // One is the units sold chart and second the value of units
  // sold chart.

  // Data for the chart which is going to represent the value
  // of units sold
  const totalSalesLine = {
    id: "totalSales",
    color: theme.palette.secondary.main,
    data: [],
  };

  // Data for the chart which is going ot represent the number
  // of units that we sold
  const totalUnitsLine = {
    id: "totalUnits",
    color: theme.palette.secondary[600],
    data: [],
  };

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

    // To be able to create an upward moving graph we need
    // our coorinates to have accumulating sales like
    // at april i wanna store totalSales starting from jan
    // till april and at july coordinate i need to store
    // sales from jan still july.
    monthlyData.reduce(
      (acc, { month, totalSales, totalUnits }) => {
        // Finding the accumulative sales upto this current
        // month
        const currSales = acc.sales + totalSales;
        const currUnits = acc.units + totalUnits;

        // Adding the accumulative sales upto the current month
        // as a coordinate inside of both the graphs data.
        // Along with all the previous months data.

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: currSales },
        ];

        // Adding the accumulative units sold upto the current
        // month as a coorindate along with the accumative
        // units sold for the previous month.

        totalUnitsSold.data = [
          ...totalUnitsSold.data,
          { x: month, y: currUnits },
        ];

        // Returning the accumulative sales and units upto our
        // current month so we can calculate the next months
        // accumulative easily by just adding its sales and units
        // to the previous months accumulative sales and units.
        return {
          sales: currSales,
          units: currUnits,
        };
      },
      {
        sales: 0,
        units: 0,
      }
    ); // This is the comment you should use to ignore useless uslint warnings.
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <ResponsiveLine
      data={view === "units" ? totalUnitsLine : totalSalesLine}
      margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        // So for our bottom axis which is going to show
        // our x axis values which are month
        // when the isDashboard is true then i wanna
        // set values as only of the first three characters
        // cause on dashboard there is less space.
        format: (v) => {
          if (isDashboard) {
            return v.slice(0, 3);
          }
          return v;
        },
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? "" : "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      // Have curving line grpah.
      curve="catmullRom"
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard
          ? ""
          : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        !isDashboard ? [
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ] : []}
    />
  );
}
