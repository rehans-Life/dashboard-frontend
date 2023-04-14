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
import { AppBar, Toolbar } from "@mui/material";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();

  // AppBar is a Material UI Component which helps to create Navbar
  // web pages due to default Styles given to it.

  // Here we are also going to apply custom styles of our own on the
  // component and for that we can use the sx prop and pass in the
  // css properties in the object.

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      {/* A Toolbar component which takes care of the inner elements of the Appbar */}
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* There is going to be two sides of the Navbar one for the 
        search and menu bar and one for the toggle mode and profile*/}

      {/* LEFT SIDE */}
      </Toolbar>
    </AppBar>
  );
}
