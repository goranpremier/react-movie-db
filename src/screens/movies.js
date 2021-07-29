import * as React from "react";
import { Container } from "../components/container";
import { MovieList } from "../components/movies/movie-list";

function Movies() {
  return (
    <Container>
      <h1 style={{ fontSize: 24, padding: "20px 0" }}>Movies</h1>
      <MovieList />
    </Container>
  );
}

export { Movies };
