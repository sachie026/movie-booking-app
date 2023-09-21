import React from "react";

import useData from "../../hooks/useMovieData";

import MovieList from "./movie-list";
import Loader from "../../components/loader";

import { HOME_TITLE } from "../../common/labels";
import {
  PageContainer,
  PageContent,
  PageHeader,
  Title,
} from "../../common/shared";

function Home() {
  const { movies, loadingMovies } = useData();

  return (
    <PageContainer>
      <PageHeader>
        <Title>{HOME_TITLE}</Title>
      </PageHeader>
      <PageContent>
        {loadingMovies ? <Loader /> : <MovieList movies={movies} />}
      </PageContent>
    </PageContainer>
  );
}

export default Home;
