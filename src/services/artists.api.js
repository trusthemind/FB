import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const artistsApi = createApi({
    reducerPath: 'GET_ARTIST_REDUCER',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://mijntattoo.nl/api/' }),
    endpoints: (builder) => ({
        getAllArtists: builder.query({
            query: () => "artists",
        }),
    }),
})

export const { useGetAllArtistsQuery } = artistsApi;