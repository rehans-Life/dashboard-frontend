import React from "react";
import { useGetGropgraphyQuery } from "../redux/api";
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
  const { data } = useGetGropgraphyQuery();
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
            data={data}
            // Passing the features property in our geoData that we copied

            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: "#444444",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000000",
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
