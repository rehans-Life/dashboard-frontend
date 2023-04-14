import React from "react";
import { Search } from "@mui/icons-material";

// Here the new component is the InputAdorment and it helps in
// adding prefix, suffix and actions to our input button.
import { IconButton, TextField, InputAdornment } from "@mui/material";

// Importing the necessary components in order to create our
// own Data Grid Toolbar.
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";

import FlexBetween from "./FlexBetween";

export default function DataGridCustomToolbar({
  searchInput,
  setSearchInput,
  setSearch,
}) {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          {/* Provides the columns button to our Toolbar which the user
        can use to select the columns they want to view in the grid*/}
          <GridToolbarColumnsButton />
          {/* Provides the density option to our Toolbar */}
          <GridToolbarDensitySelector />
          {/* Provides the Export Button to our Toolbar */}
          <GridToolbarExport />
        </FlexBetween>
        {/* Search bar For our Toolbar */}
        <TextField
          label="Search..."
          sx={{ mb: "0.5rem", width: "15rem" }}
          // Connecting the searchInput state to our TextField
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          // Adding a search icon as a suffix to our search input field.
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {/* When the user clicks on the search button then
                the value inside of searchInput state will be 
                transferred to the search state hence when the search
                state is updated our redux query is going to make
                another API call to the backend to grab the documents
                that has characters of the searchInput in there 
                cost or userId*/}
                <IconButton onClick={() => setSearch(searchInput)}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </FlexBetween>
    </GridToolbarContainer>
  );
}
