import React, { useMemo, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  useMediaQuery,
} from "@mui/material";
import { themeSettings } from "../theme";
import { useSelector } from "react-redux";
import { getMode } from "../redux/themeSlice";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useGetUserQuery } from "../redux/api";

export default function Layout({ children }) {
  const mode = useSelector(getMode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // The query method automatically returns the response recieved from
  // making the call to the specified endpoint.
  const { data } = useGetUserQuery(process.env.NEXT_PUBLIC_USERID);
  {
    /* Checking to see if the screen on which our website is being shown 
    at is more than 600px or not */
  }
  {
    /* The useMediaQuery function returns a boolean of the basis of the
   given condition is met or not. In our case it checks wether the screen
   size on which our website is being is more than or equal to 600px or
   not. If its not then its returns False or if it is then it returns True
   And we are considering the screen whose size is less than 600px as 
   mobile devices*/
  }
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Box is a Material UI Component that allows you to pass
      in css styles just like normal props */}
      <Box
        display={isNonMobile ? "flex" : "block"}
        pt="0.2rem"
        // width="100vw"
        height="100%"
      >
        <Sidebar
          isNonMobile={isNonMobile}
          user={data || {}}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1} flex={1} width={'100%'}>
          <Navbar
            user={data || {}}
            setIsSidebarOpen={setIsSidebarOpen}
            isNonMobile={isNonMobile}
          />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
