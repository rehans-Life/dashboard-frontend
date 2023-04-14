import React from "react";
import { useGerDashboardQuery } from "../redux/api";
import FlexBetween from "../components/FlexBetween"
import Header from "../components/Header"

const Dashboard = () => {
  const { data } = useGerDashboardQuery();
  console.log(data);
  return <div>Dashboard</div>;
};
export default Dashboard;
