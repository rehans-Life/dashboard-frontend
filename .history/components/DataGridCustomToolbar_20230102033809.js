import React from "react";
import { Search } from "@mui/icons-material";

// Here the new component is the InputAdorment and it helps in
// adding prefix, suffix and actions to our input button.
import { IconButton, TextField, InputAdorment } from "@mui/material";

// Importing the necessary components in order to create our
// own Data Grid Toolbar.
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";

import FlexBetween from "./FlexBetween";

export default function DataGridCustomToolbar() {
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
          InputProps={{
            startAdornment: (
              <InputAdorment>
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdorment>
            ),
          }}
        ></TextField>
      </FlexBetween>
    </GridToolbarContainer>
  );
}
