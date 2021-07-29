import styled from 'styled-components'

const CardWrapper = styled.div`
  background: #fff;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  width: 160px;
  max-width: 160px;
  margin: 10px;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
`

const CardHeader = styled.div`
  padding: 0;
  margin: 0;
  height: 240px;
  width: 160px;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  background-size: cover;
`

function MovieCard({ movie, ...props }) {
  return (
    <CardWrapper {...props}>
      <CardHeader
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}
      />
    </CardWrapper>
  )
}

export { MovieCard }
