import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating our fetch API calls using Redux.

// This helps us to reuse our fetch API calls in multiple
// components.

export const api = createApi({
    // Setting up the baseURL for our API calls.
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASE_URL}),
    // This is Equivalent to giving the name to the slice.
    reducerPath:'adminApi',
    tagTypes:['User']
})