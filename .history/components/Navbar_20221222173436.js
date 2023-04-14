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
import { AppBar, IconButton, InputBase, Toolbar } from "@mui/material";

export default function Navbar() {
  const dispatch = useDispatch();

  // This gives us access to our material UI Theme Object
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
        <FlexBetween gap="0.5rem">
          {/* Provides styles to a Icon */}
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon />
          </IconButton>
          {/* Since FlexBetween is a Box component therefore we can apply Css properties to it using props instead of using the sx props*/}
          <FlexBetween
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            backgroundColor={theme.palette.background.alt}
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* Right Side */}
        <FlexBetween gap="0.5rem">
          {/* This button is used to switch between different themes */}
          <IconButton onClick={() => dispatch(setMode())}>
            {/* Showing the icons according to the theme */}
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton onClick={() => dispatch(setMode())}>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}
