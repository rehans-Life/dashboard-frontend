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
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Sales",
  ],

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
      query: () => "client/customers",
      // Attaching the Customers tag to the output of the endpoint
      providesTags: ["Customers"],
    }),

    // Creating a query method that is going to make a request to the
    // client/transactions route.
    getTransactions: build.query({
      // While making the fetch call we obviously have to send some
      // data that is going to be sent while making the fetch call
      query: ({ pageNo, pageSize, sort, search }) =>
        // Instead of setting up the params in the url we are passing
        // them seperately using the params property.

        // In the previous case we had to send the params along in the
        // url cause it was required for us to send the id in the
        // url as it was a part of the route to which we were making
        // the request.
        ({
          url: "client/transactions",
          method: "GET",
          params: { pageNo, pageSize, sort, search },
        }),
      providesTags: ["Transactions"],
    }),
    // Creating a query method that is going to make a request to the
    // client/geography route.
    getGeography: build.query({
      // Defining the route to which this query method is going
      // to be making request to.
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    // Creating a querty method which is going to make a request
    // to the sales/sales route to get overStats data from our
    // collection
    getSales: build.query({
      // Defining the route in the query field.
      query: () => "/sales/sales",
      // Assigning a tag to the API call.
      providesTags: ["Sales"],
    }),
  }),
});

// Now In order make calls to the endpoints defined in the above object.
// You would need to export the endpoint property with use prefix
// and a Query suffix.

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
} = api;
