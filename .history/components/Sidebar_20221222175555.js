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

export default function Sidebar({
  setIsSidebarOpen,
  isSidebarOpen,
  isNoneMobile,
  drawerWidth,
}) {
  return <div>Sidebar</div>;
}
