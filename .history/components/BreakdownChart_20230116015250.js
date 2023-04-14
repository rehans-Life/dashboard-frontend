import React, { useMemo } from "react";
import { useGetSalesQuery } from "../redux/api";
import { Box, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function BreakdownChart({ isDashboard = false }) {
  const theme = useTheme();

  const { data } = useGetSalesQuery();

  const formattedData = useMemo(() => {
    if (!data) return [];
    const { salesByCategory } = data;
    return Object.entries(salesByCategory).map(([category, sales], index) => ({
      id: category,
      label: category,
      value: sales,
      color:
        index % 2 === 0
          ? theme.palette.secondary[500]
          : theme.palette.secondary[300],
    }));
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Box
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      // We are going to have its position relative cause we are going
      // to have a certain element to positioned absolute so that we can
      // add text in the middle of the pie chart.
      position="relative"
    >
      <ResponsivePie
        data={formattedData}
        // Telling the colors for the pies to be on the basis of
        // what is defined in the data.
        colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 60, bottom: 100, left: 60 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
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
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        enableArcLabels={!isDashboard}
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "data.color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: isDashboard ? 16 : 18,
            itemTextColor: theme.palette.primary[300],
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: isDashboard ? 14 : 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary[200],
                },
              },
            ],
          },
        ]}
      />
      <Box
        position={"absolute"}
        top="50%"
        left="50%"
        color={theme.palette.secondary[400]}
        textAlign="center"
        sx={{
          transform: isDashboard
            ? "translate(-50%,-170%)"
            : "translate(-50%,-100%)",
        }}
      >
        <Typography variant="h6">
          {!isDashboard && "Total:"} ${data?.yearlySalesTotal}
        </Typography>
      </Box>
    </Box>
  );
}
