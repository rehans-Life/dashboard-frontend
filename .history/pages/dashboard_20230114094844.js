import React from "react";
import { useGerDashboardQuery } from "../redux/api";

const Dashboard = () => {
  const { data } = useGerDashboardQuery();
  return <div>Dashboard</div>;
};
export default Dashboard;
