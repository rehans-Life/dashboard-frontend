import React from "react";

export default function Admin() {
  const { data } = useGetAdminsQuery();
  console.log(data);
  return <div>Admin</div>;
}
