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
  return <div>Geography</div>;
}
