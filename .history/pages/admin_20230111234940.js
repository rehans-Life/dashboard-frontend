import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { useGetAdminsQuery } from "../redux/api";

export default function Admin() {
  const { data } = useGetAdminsQuery();
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMINS" subtitle="Managin admins and list of admins" />
    </Box>
  );
}
