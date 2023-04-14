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
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "../components/BreakdownChart";
import OverviewChart from "../components/OverviewChart";

const Dashboard = () => {
  const { data } = useGerDashboardQuery();
  const theme = useTheme();
  // If the screen has atleast a width of 1200px then then this
  // is going to return True or else its going to return False.
  const isNonMobile = useMediaQuery("(min-width:1200px)");
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.7,
    },
    {
      field: "userId",
      headerName: "User Id",
      flex: 0.7,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      // The product field in the datasets consist of an array so we
      // we are going to show the lengths of each of the arrays in
      // the datasets
      renderCell: (param) => param.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      // Adding a dollar sign infront of each cost values.
      renderCell: (param) => `$${param.value}`,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            transitionProperty: "all",
            transition: "ease-in",
            transitionDuration: "200ms",
            ":hover": {
              backgroundColor: theme.palette.secondary[100],
            },
          }}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          // This targets the direct div child's of this component
          "& > div": {},
        }}
      ></Box>
    </Box>
  );
};
export default Dashboard;
