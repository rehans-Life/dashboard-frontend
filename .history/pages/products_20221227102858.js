import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../components/Header";

// Importing the getProducts query method
import { useGetProductsQuery } from "../redux/api";

export default function Products() {
  // getProducts Query Method is automatically going to make
  // the request to the route specified and stores the
  // data we recieve in response inside of the data property

  // It also has this isLoading property which is a boolean
  // that can be used to detemine weather it has recieved the
  // response by making the API Call or not.
  const { data, isLoading } = useGetProductsQuery();

  const isNonMobile = useMediaQuery("min-width:1000px");
  return (
    <Box>
      <Header title="Products" subtitle="See your list of products" />

      {/* If we have recieved the data were gonna show the data obviously
       but if we havent recieved and even isLoading is true then we show 
       loading screen */}
      {data || !isLoading ? (
        <Box
          mt="25px"
          display="grid"
          // repeat(4,1fr)=> 1fr,1fr,1fr,1fr which is 250px each column
          // in a 1000px screen.
          gridTemplateColumns="repeat(4,1fr)"
          justifyContent={"space-between"}
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            // Im accessing the direct child which is a div and applying
            // some styles on it.
            "& > div": { gridColumn: isNonMobile },
          }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
