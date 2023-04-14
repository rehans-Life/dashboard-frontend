import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating our fetch API calls using Redux.

// This helps us to reuse our fetch API calls in multiple
// components.

export const api = createApi({
  // Setting up the baseURL for our API calls.
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),

  // This is Equivalent to giving the name to the slice.
  reducerPath: "adminApi",

  // Used to Identify the data that we recieve by making the API call.
  tagTypes: ["User", "Products", "Customers"],

  // Defining the enpoints to which we can make calls to by this Slice.
  // through the given base URL.
  endpoints: (build) => ({
    getUser: build.query({
      // Defining the route to which the api call will be made through
      // this query method.
      query: (id) => `general/user/${id}`,

      // Attaching the User tag to the output of our endpoint.
      providesTags: ["User"],
    }),

    getProducts: build.query({
      // Definding the route to which the api call will be made
      // through this query method
      query: () => "client/products",

      // Attaching the Products tag to the output of the endpoint
      providesTags: ["Products"],
    }),

    // Creating a query method that is going to make a request
    // to the client/customers route
    getCustomers: build.query({
      query: (id) => "client/customers",

      // Attaching the Customers tag to the output of the endpoint
      providesTags: ["Customers"],
    }),
  }),
});

// Now In order make calls to the endpoints defined in the above object.
// You would need to export the endpoint property with use prefix
// and a Query suffix.

export const { useGetUserQuery, useGetProductsQuery } = api;
