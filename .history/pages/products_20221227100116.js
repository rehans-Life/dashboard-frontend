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

  console.log(data);

  return (
    <Box>
      <Header title="Products" subtitle="See your list of products" />
      {data || !isLoading ? <Box></Box> : <></>}
    </Box>
  );
}
