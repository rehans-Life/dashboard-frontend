import React from "react";
import { useGetAdminsQuery } from "../redux/api";

export default function Admin() {
  const { data } = useGetAdminsQuery();
  console.log(data);
  return <div>Admin</div>;
}
