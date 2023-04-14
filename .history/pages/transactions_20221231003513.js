import React, { use, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { useGetTransactionsQuery } from "../redux/api";
import { useTheme } from "@emotion/react";

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

  return <div>Transactions</div>;
}
