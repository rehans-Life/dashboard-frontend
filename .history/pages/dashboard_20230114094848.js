import React from "react";
import { useGerDashboardQuery } from "../redux/api";

const Dashboard = () => {
  const { data } = useGerDashboardQuery();
  console.log(data);
  return <div>Dashboard</div>;
};
export default Dashboard;
