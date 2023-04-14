import React, { use, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { useGetTransactionsQuery } from "../redux/api";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";

export default function Transactions() {
  const theme = useTheme();

  // Defining states for our pageNo, PageSize, search param and sort
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  // This is going to make the fetch call whenever one of the
  // created state variables updates as the component is going to
  // rerender whenever one of the states updates hence this function
  // is going to run again and grab the new data for us on the basis
  // of the changes made.

  const { data, isLoading } = useGetTransactionsQuery({
    pageNo,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User Id",
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable:false,
      // The product field in the datasets consist of an array so we
      // we are going to show the lengths of each of the arrays in 
      // the datasets
      renderCell:(param) => param.value.length
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      // Adding a dollar sign infront of each cost values.
      renderCell: (param) => `$${param.value}` 
    },
  ];

  return <Box m="1.5rem 2.5rem">
    <Header title="TRANSACTIONS" subtitle="Entire list of Transactions" />
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
          rows={data ? data.transactions : []}
          pagination
          page={pageNo}
          pageSize={pageSize}
          paginationMode="server"
          onPageChange={(newPage) => setPageNo(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          columns={columns || []}
        />
      </Box>
  </Box>
}
