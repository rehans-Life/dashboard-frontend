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
import StatBox from "../components/StatBox";

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
      <FlexBetween alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "12px",
            marginLeft: "10px",
            fontWeight: "bold",
            padding: "10px",
            transitionProperty: "all",
            transition: "ease-in",
            transitionDuration: "200ms",
            ":hover": {
              backgroundColor: theme.palette.secondary[100],
            },
          }}
        >
          <DownloadOutlined sx={{ mr: "8px" }} />
          Download Reports
        </Button>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          // This targets the direct div child's of this component
          // So basically if we are on a mobile screen then we want
          // span each grid item by 12 columns if we are not on a mobile
          // screen then we use each grid items own span properties.
          "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
        }}
      >
        {/* Row 1 */}
        <StatBox
          // Passing in the props for the Stat Box 
          // This StatBox shows the total customers we have had this year.
          title="Total Customers"
          value={data && data.totalCustomers}
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
          increase="-14px"
          description="Since last month"
        />
        <StatBox
          // Passing in the props for the Stat Box
          title="Sales Today"
          value={data && data.todayStats.totalSales}
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
          increase="-14px"
          description="Since last month"
        />
      </Box>
    </Box>
  );
};
export default Dashboard;
