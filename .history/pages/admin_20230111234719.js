import { Box } from "@mui/material";
import React from "react";
import { useGetAdminsQuery } from "../redux/api";

export default function Admin() {
  const { data } = useGetAdminsQuery();
  console.log(data);
  return <Box m="1.5rem 2.5rem"></Box>;
}
