import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListenItem,
  ListItem,
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
  MapOutlined,
} from "@mui/icons-material";

import { useState } from "react";
import FlexBetween from "./FlexBetween";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Sidebar({
  user,
  setIsSidebarOpen,
  isSidebarOpen,
  isNonMobile,
  drawerWidth,
}) {
  const router = useRouter();
  const [active, setActive] = useState("dashboard");
  const theme = useTheme();

  const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Geography",
      icon: <MapOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      text: "Daily",
      icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];
  {
    /* For our Sidebar we are going to use the Drawer component 
    which is made for this kind of stuff */
  }

  return (
    <Box>
      <Box
        bgcolor={theme.palette.background.alt}
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            boxSizing: "border-box",
            height: "100%",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth,
            translateX: isSidebarOpen ? "0" : "-100%",
            transition: "all",
            transition: "ease-in",
            transitionDuration: "200ms",
          },
        }}
      >
        <Box width="100%" height="100%">
          <Box m="1.5rem 2rem 0rem 3rem">
            <FlexBetween color={theme.palette.secondary.main} gap="0.5rem">
              <Box display="flex" alignItems="center">
                <Typography variant="h4" fontWeight="bold">
                  ECOMVISION
                </Typography>
              </Box>
              {/* If we are on a mobile screen we wanna give the user
            the option to be able to close the sidebar as well since
            there is not much space on the screen*/}
              {!isNonMobile && (
                <IconButton
                  sx={{ marginLeft: "auto" }}
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>
          <List sx={{ marginTop: "10px", paddingBottom: "3.5rem" }}>
            {navItems.map(({ text, icon }, index) => {
              if (!icon) {
                return (
                  <Typography key={index} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }
              const lctext = text.toLowerCase();
              {
                /* If the item im iterating through has its text equal to 
                the text within the active state then we give it some 
                special styles */
              }
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      router.push(`/${lctext}`);
                      setActive(lctext);
                    }}
                    sx={{
                      backgroundColor:
                        active === lctext
                          ? theme.palette.secondary[300]
                          : "transparent",
                      color:
                        active === lctext
                          ? theme.palette.primary[600]
                          : theme.palette.secondary[100],
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "2rem",
                        color:
                          active === lctext
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {active === lctext && (
                      <ChevronRightOutlined sx={{ ml: "auto" }} />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Box
            width="100%"
            sx={{
              backgroundColor: theme.palette.background.alt,
              paddingBottom: "20px",
              position: "sticky",
              bottom: "0",
            }}
          >
            {/* Adds a line */}
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Image
                src="/profile.jpeg"
                alt=""
                width={1920}
                height={1080}
                style={{
                  objectFit: "cover",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                }}
              />
              <Box textAlign={"left"}>
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  fontSize="0.9rem"
                  sx={{
                    color: theme.palette.secondary[100],
                    textTransform: "capitalize",
                  }}
                >
                  {user?.role}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[100],
                  fontSize: "25px",
                }}
              />
            </FlexBetween>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
