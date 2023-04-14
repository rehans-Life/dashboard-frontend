import React, { useState } from "react";
import { InputLabel, FormControl, Box, Select, MenuItem } from "@mui/material";
import Header from "../components/Header";
import OverviewChart from "../components/OverviewChart";

// The line graph component is going to be used in multiple
// pages its obviously going to be on this page but also on
// the main dashboard page

// So it owuld be better to create a component with this
// line graph inside of it and use it multiple pages.

export default function Overview() {
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

          {/* Whichever item is clicked its value is set as state.*/}
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view}/>
      </Box>
    </Box>
  );
}
