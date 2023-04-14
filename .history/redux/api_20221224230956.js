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
  tagTypes: ["User"],
  // Defining the enpoints to which we can make calls to by this Slice.
  // through the given base URL.
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      // Attaching the User tag to the output of our endpoint.
      providesTags: ["User"],
    }),
  }),
});

// Now In order make calls to the endpoints defined in the above object.
// You would need to export the endpoint with use prefix and a Query
// suffix.

export const { useGetUserQuery } = api;
