import React, { useMemo, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function Daily() {
  const { data } = useGetSalesQuery();
  const theme = useTheme();

  // We are going to have a date picker so these are the states
  // that are going to store the dates selected by the user.
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));

  const formattedData = useMemo(() => {
    if (!data) return [];
    const { dailyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: theme.palette.secondary[600],
      data: [],
    };
    dailyData.forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date);
      // Making sure im including those dates which are within the start
      // the end date selected by the user.
      if (startDate <= dateFormatted && dateFormatted <= endDate) {
        // In the coordinate we only wanna show the day and year
        // part of the date
        const splitDate = date.substring(date.indexOf("-") + 1);
        totalSalesLine.data.push({ x: splitDate, y: totalSales });
        totalUnitsLine.data.push({ x: splitDate, y: totalUnits });
      }
    });
    return [totalUnitsLine, totalSalesLine];
  }, [data, startDate, endDate]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!data) return <>Loading...</>;
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DAILY SALES" subtitle="Chart of daily sales" />
      <Box height="75vh">
        <Box display="flex" justifyContent="flex-end">
          {/* This date picker is going to allow the users
            to pick a startDate */}
          <DatePicker
            // This selected date that is going to be displayed
            selected={startDate}
            // The state variable that is going to be updated
            // when the user clicks on it
            onChange={(date) => setStartDate(date)}
            selectsStart
            // The range of dates the user can choose from
            // This is the start of the range.
            startDate={startDate}
            // This is the end of the range which is equal to the
            // endDate which the user has picked.
            // This is so the user doesnt pick a date greater
            // the endDate they have picked.
            endDate={endDate}
          />
        </Box>
        <ResponsiveLine
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.secondary[200],
                },
              },
              legend: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.secondary[300],
                  strokeWidth: 1,
                },
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
            },
            legends: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            tooltip: {
              container: {
                color: theme.palette.primary[300],
              },
            },
          }}
          data={formattedData}
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
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            /* Its the legened for the x axis ill only show it 
        on the overview screen */
            legend: "Dates",
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
            legend: `Total Revenue & Units for Year`,
            legendOffset: -60,
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
          legends={[
            {
              anchor: "top-right",
              direction: "column",
              justify: false,
              translateX: 30,
              translateY: -20,
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
          ]}
        />
      </Box>
    </Box>
  );
}
