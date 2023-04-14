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

  return <Drawer open={isSidebarOpen} variant="persistent" anchor="left" sx={{
    width:drawerWidth,
    "& .MuiDrawer-paper":{
        color:theme.palette.secondary[200]
        backgroundColor:theme.palette.background.alt
    }
  }}>

  </Drawer>
}
