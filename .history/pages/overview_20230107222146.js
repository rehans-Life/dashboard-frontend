import React, { useState } from "react";
import { useGetSalesQuery } from "../redux/api";
import { InputLabel, FormControl, Box, Select, MenuItem } from "@mui/material";
import Header from "../components/Header";

export default function Overview() {
  // Using the query method to make request to the sales/sales route
  // to get the overallStats data thats going to be inputted inside
  // of our line graph.
  const { data } = useGetSalesQuery();
  // Setting up a view state to allow the user switch between
  // number units sold and value of units sold
  const [view, setView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        {/* This is going to be a dropdown thats going to allow
        us to switch our data from number of units sold and
        value of units sold */}
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          {/* Same As Default html select input type but with
          some additional default styles */}
          <Select value={view}></Select>
        </FormControl>
      </Box>
    </Box>
  );
}
