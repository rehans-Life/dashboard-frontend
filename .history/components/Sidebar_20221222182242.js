import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListenItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.jpeg";
import { useRouter } from "next/router";

export default function Sidebar({
  setIsSidebarOpen,
  isSidebarOpen,
  isNoneMobile,
  drawerWidth,
}) {
  const router = useRouter();
  const [active, setActive] = useState("");
  const theme = useTheme();

  useEffect(() => {
    setActive(router.pathname);
  }, [router]);

  {
    /* For our Sidebar we are going to use the Drawer component 
    which is made for this kind of stuff */
  }

  return (
    <Drawer
      open={isSidebarOpen}
      variant="persistent"
      anchor="left"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          color: theme.palette.secondary[200],
          boxSizing: "border-box",
          borderWidth: isNoneMobile ? 0 : "2px",
          width: drawerWidth,
          backgroundColor: theme.palette.background.alt,
        },
      }}
    >
      <Box width="100%">
        <Box m="1.5rem 2rem 2rem 3rem"></Box>
      </Box>
    </Drawer>
  );
}
