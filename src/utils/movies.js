import { useQuery, useInfiniteQuery } from 'react-query'
import { client } from './api-client'

export function useDiscoverMovies(query) {
  return useInfiniteQuery(
    ['movies/discover', query],
    async ({ pageParam = 1 }) =>
      client(`/discover/movie?page=${pageParam}&${query}`, { method: 'GET' }),
    {
      getNextPageParam: ({ page, total_pages: totalPages }) => {
        return page < totalPages ? page + 1 : undefined
      },
    },
  )
}

export function useMovieGenres(language) {
  return useQuery({
    queryKey: ['movies/genres', { language: language || 'default' }],
    queryFn: async () => {
      const response = await client('/genre/movie/list', {
        method: 'GET',
        params: { language },
      })
      return response.genres
    },
  })
}
