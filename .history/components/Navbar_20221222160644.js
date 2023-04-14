import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../redux/themeSlice";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { AppBar } from "@mui/material";

export default function Navbar() {
  const dispatch = useDispatch()
  const theme = useTheme()
  
  // AppBar is a Material UI Component which helps to create Navbar
  // web pages due to default Styles given to it.
  return <AppBar sx={{

  }}></AppBar>
}
