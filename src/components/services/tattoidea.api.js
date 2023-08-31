import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ideaApi = createApi({
  reducerPath: 'tattoIdea',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mijntattoo.nl/api/' }),
  endpoints: (builder) => ({
    getTattoIdeaAll: builder.query({
      query: () => "designs",
    }),
  }),
})


export const {useGetTattoIdeaAllQuery} = ideaApi;

