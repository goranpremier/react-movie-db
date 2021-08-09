import { useQuery } from 'react-query'
import { client } from './api-client'

export function useConfiguration(configuration) {
  const endpoint = configuration
    ? `/configuration/${configuration}`
    : '/configuration'

  return useQuery({
    queryKey: endpoint,
    queryFn: async () =>
      client(endpoint, {
        method: 'GET',
      }),
    staleTime: Infinity,
  })
}
