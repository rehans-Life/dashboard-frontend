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
  return (
    <Box>
      <Header title="Products" subtitle="See your list of products" />
    </Box>
  );
}
