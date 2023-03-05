import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const ShazamApi = createApi({
    reducerPath: 'ShazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/shazam',
    }),
    endpoints: (builder)=> ({
        getTopCharts: builder.query({query: ()=> '/charts/track'}),
        getSongsByGenre: builder.query({query: (GenreId)=> `/charts/track?listId=genre-global-chart-${GenreId}`}),
        getSongDetails: builder.query({query: ({songid}) => `/songs/get-details?key=${songid}`}),
        getSongRelated: builder.query({query: ({songid}) => `/songs/list-recommendations?key=${songid}`}),
        getArtistDetails: builder.query({query: (artistId) => `/artists/get-summary?id=${artistId}`}),
        getSongsByCountry: builder.query({query: (countryCode) => `/charts/track?listId=ip-country-chart-${countryCode}`}),
        getSongsBySearch: builder.query({query: (searchTerm) => `/search?term=${searchTerm}`}),
    })
})

export const { useGetTopChartsQuery,useGetSongDetailsQuery,useGetSongRelatedQuery,useGetArtistDetailsQuery, useGetSongsByCountryQuery,useGetSongsByGenreQuery,useGetSongsBySearchQuery } = ShazamApi;