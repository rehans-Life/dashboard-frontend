import React from "react";
import { useGetGeographyQuery } from "../redux/api";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";

// This is the map/chart component that we want to add to our
// website.
import { ResponsiveChoropleth } from "@nivo/geo";

// Importing the default data that we want display on the
// map that we have like the continents, countries and
// cities.
import { geoData } from "../public/geoData";

// This page is going to consist of a chart/map that is going to
// display the information in relation where our users are located
// country wise.

// You can see our user doucments actually have a country field which
// stores the country code of where they are located like CN - china
// US - usa ID - india etc.

export default function Geography() {
  // Making an API call to our client/geography route to get
  // the geogrpahical data of our users
  const { data } = useGetGeographyQuery();
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Geography" subtitle="Find where your users are located" />
      {/* This Box is going to act as a border to our map */}
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <ResponsiveChoropleth
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
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                },
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              legends:{
                text:{
                  fill:theme.palette.secondary[200]
                }
              },
              tooltip:{
                container:{
                  color:theme.palette.primary.main
                }
              }
            }}
            data={data}
            // Passing the features property in our geoData that we copied
            // over into the features prop.
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 25,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[200],
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.secondary[100],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading..</>
        )}
      </Box>
    </Box>
  );
}
