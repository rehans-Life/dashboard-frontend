import React, { useState } from "react";
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
import { StarBorderOutlined, Star } from "@mui/icons-material";
// Importing the getProducts query method
import { useGetProductsQuery } from "../redux/api";

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stats,
}) => {
  const theme = useTheme();

  // This is going to be used for the dropdown which is going to
  // come out of the product Card show the stats of the product.
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded(!isExpanded);
  const collapseInfo = {
    Id: _id,
    SupplyLeft: supply,
    YearlySalesTotal: stats.yearlySalesTotal,
    YearlyTotalSoldUnits: stats.yearlyTotalSoldUnits,
  };
  return (
    <Card
      component={"div"}
      sx={{
        background: theme.palette.background.alt,
      }}
    >
      <CardContent>
        <Typography
          fontSize="0.75rem"
          textTransform="capitalize"
          marginY="5px"
          color={theme.palette.secondary[700]}
        >
          {category}
        </Typography>
        <Typography
          fontWeight="semibold"
          variant="h5"
          color={theme.palette.secondary[100]}
        >
          {name}
        </Typography>
        <Typography fontSize="0.85rem" color={theme.palette.secondary[500]}>
          ${price}
        </Typography>

        <Box marginY="1rem">
          <Rating name="size-medium" value={Math.floor(rating)} />
          <Typography fontSize="0.85rem">{description}</Typography>
        </Box>
        <Button
          mt="0.25rem"
          onClick={handleExpand}
          sx={{ fontSize: "0.75rem", color: "white" }}
        >
          SEE MORE
        </Button>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Box mt="10px" display="flex" flexDirection={"column"}>
            {Object.entries(collapseInfo).map((stat) => (
              <Typography
                key={stat[0]}
                sx={{ color: theme.palette.primary[300] }}
              >
                {stat[0]} : {stat[1]}
              </Typography>
            ))}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default function Products() {
  // getProducts Query Method is automatically going to make
  // the request to the route specified and stores the
  // data we recieve in response inside of the data property

  // It also has this isLoading property which is a boolean
  // that can be used to detemine weather it has recieved the
  // response by making the API Call or not.
  const { data, isLoading } = useGetProductsQuery();
  // If the screen on which were showing our website has 1000 or over
  // 1000 pixels then this is going to return True or else False if
  // the screen has less than 1000 pixels.

  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <Box sx={{ padding: "10px" }}>
      <Header title="Products" subtitle="See your list of products" />

      {/* If we have recieved the data were gonna show the data obviously
       but if we havent recieved and even isLoading is true then we show 
       loading screen */}
      {data ? (
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
            // Im accessing all the grid Items since there all going to
            // to be divs
            // If the screen on which were showing our website on has
            // over 1000 pixels then we stick to the default settings
            // and have each grid item span over 1 column itself
            // Else if the screen has less than 1000 pixels then we
            // make each grid item span over all four columns of our grid.
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data?.map(
            ({
              _id,
              price,
              supply,
              stats,
              rating,
              description,
              category,
              name,
            }) => (
              <Product
                key={_id}
                _id={_id}
                price={price}
                stats={stats}
                supply={supply}
                rating={rating}
                description={description}
                category={category}
                name={name}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
}
