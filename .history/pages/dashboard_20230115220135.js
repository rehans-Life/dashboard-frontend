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
  AddBox,
  BuildTwoTone,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Dashboard = () => {
  const { data } = useGerDashboardQuery();
  console.log(data);
  return <div>Dashboard</div>;
};
export default Dashboard;
