import React, { use, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { useGetTransactionsQuery } from "../redux/api";
import { useTheme } from "@emotion/react";

export default function Transactions() {
  const theme = useTheme();

  // Defining states for our pageNo, PageSize, search param and sort
  const [pageNo, setPageNo] = -useState(0);
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
    sort,
    search,
  });

  return <div>Transactions</div>;
}
