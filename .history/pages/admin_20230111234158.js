import React from "react";

export default function Admin() {
  const { data } = useGetAdminsQuery();
  return <div>Admin</div>;
}
