import React from "react";
import { useGerDashboardQuery } from "../redux/api";
import FlexBetween from "../components/FlexBetween";
import Header from "../components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  BuildTwoTone,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "../components/BreakdownChart";
import OverviewChart from "../components/OverviewChart";

const Dashboard = () => {
  const { data } = useGerDashboardQuery();
  return <div>Dashboard</div>;
};
export default Dashboard;
