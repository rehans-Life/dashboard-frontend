import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "../redux/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";

export default function Customers() {
  const { data } = useGetCustomersQuery();
  const theme = useTheme();

  // While Defininng a column in your Data Grid you have to provide
  // the columns name to be shown in the Data Grid in the headerName
  // field. And you also have to specify what field of the datasets
  // is going to be shown under this column. You have have to
  // specify its size as well.

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        // Updating the values of each cell and formating the number.
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.5,
    },
    {
        field: "occupation",
        headerName: "Occupation",
        flex: 1,
      },
      {
        field: "role",
        headerName: "Role",
        flex: 0.5,
      },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      {/* YOu need to give the parent component a specific height
      for it to show up */}
      <Box mt="40px" height="75vh">
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
