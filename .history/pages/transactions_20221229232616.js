import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { useGetTransactionsQuery } from "../redux/api";
import { useTheme } from "@emotion/react";

export default function Transactions() {
  const theme = useTheme()
  
  // Defining states for our pageNo, PageSize, search param and sort
  const [page,setPage] =- useState(0)
  const [pageSize,setPageSize] = useState(20)
  const [sort,setSort] = useState({})
  const [search,setSearch] = useState('')

  return <div>Transactions</div>;
}
