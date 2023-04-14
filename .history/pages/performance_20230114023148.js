import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Header from "../components/Header";
import { useGetUserPerformaceQuery } from "../redux/api";

export default function Performance() {
  const { data } = useGetUserPerformaceQuery();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      {/* You need to give the parent component a specific height
    for it to show up */}
      <Box
        mt="40px"
        height="75vh"
        sx={{
          // This is going to remove the border of the data grid.
          "& .MuiDataGrid-root": {
            border: "none",
          },
          // This removes each border from the bottom of the cell
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          // This applies a bluish color onto each cell which is a
          // header.
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
          },
          // This covers the area which is under the head
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          // These styles will be applied to the footer container
          // which has pagnation and all that
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={!data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns || []}
        />
      </Box>
    </Box>
  );
}
