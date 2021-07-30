import * as React from 'react'
import styled from '@emotion/styled'
import { useDiscoverMovies } from '../../utils/movies'
import { MovieCard } from './movie-card'
import { Button } from '../button'

const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function MovieList() {
  const { isLoading, isError, data, fetchNextPage } = useDiscoverMovies()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <MovieListWrapper>
      {data.pages.map((page) => (
        <React.Fragment key={page.page}>
          {page.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </React.Fragment>
      ))}
      <Button style={{ width: '100%' }} onClick={fetchNextPage}>
        Load more
      </Button>
    </MovieListWrapper>
  )
}

export { MovieList }
