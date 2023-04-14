import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating our fetch API calls using Redux.

// This helps us to reuse our fetch API calls in multiple
// components.

export const api = createApi({
    baseQuery:fetchBaseQuery({bas})
})