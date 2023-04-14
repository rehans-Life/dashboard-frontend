import React, { useState } from "react";
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
import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function Navbar({ user, setIsSidebarOpen,isNonMobile }) {
  const dispatch = useDispatch();

  // This gives us access to our material UI Theme Object
  const theme = useTheme();

  // Setting up states for the drop down.

  // AchorEl being null or not null is whats going to determine
  // weather our menu bar should be opne or not.
  const [anchorEl, setAnchorEl] = useState(null);

  // Whenver an element triggers this function that elment is
  // going to be stored inside of anchorEl.
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  // Open is going to be true or false on the basis of weather
  // anchor is null or not.
  const open = Boolean(anchorEl);

  // Function to set AnchorEl state to null which also sets
  // open to false.
  const handleClose = () => {
    setAnchorEl(null);
  };

  // AppBar is a Material UI Component which helps to create Navbar
  // web pages due to default Styles given to it.

  // Here we are also going to apply custom styles of our own on the
  // component and for that we can use the sx prop and pass in the
  // css properties in the object.

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      {/* A Toolbar component which takes care of the inner elements of the Appbar */}
      <Toolbar sx={{ justifyContent: "space-between", padding: "10px" }}>
        {/* There is going to be two sides of the Navbar one for the 
        search and menu bar and one for the toggle mode and profile*/}

        {/* LEFT SIDE */}
        <FlexBetween gap="0.5rem">
          {/* Provides styles to a Icon */}
          <IconButton onClick={() => setIsSidebarOpen((prev) => !prev)}>
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
        <FlexBetween gap={"0.25rem"} marginX="5px">
          {/* This button is used to switch between different themes */}
          <IconButton onClick={() => dispatch(setMode())}>
            {/* Showing the icons according to the theme */}
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
          <FlexBetween textTransform="none" gap="0.5rem">
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "0.5rem",
              }}
            >
              <Image
                src="/profile.jpeg"
                alt=""
                width={1920}
                height={1080}
                style={{
                  objectFit: "cover",
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                }}
              />
              <Box textAlign={"left"}>
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  textTransform={"capitalize"}
                  sx={{
                    color: theme.palette.secondary[100],
                    textTransform: "capitalize",
                  }}
                >
                  {user?.role}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px",
                }}
              />
            </Button>
            {/* Our Dropdown which is goibg to open which open is true
                and open is going to be true when anchorEl is not null
                */}
            <Menu
              open={open}
              id="menu"
              // Defining in what directio should the menu bar
              // open and close.
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}
