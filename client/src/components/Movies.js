import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// components
import Movie from "./Movie";

const POPULAR_MOVIES = gql`
  {
    popular {
      page
      results {
        id
        original_title
        overview
        runtime
        poster_path
      }
    }
  }
`;

export default function Movies() {
  const { loading, error, data } = useQuery(POPULAR_MOVIES);

  if (loading) return <div>Loading...</div>;

  if (error) console.log(error);

  const movies = data.popular.results.map(movie => (
    <Movie key={movie.id} data={movie} />
  ));

  return <div className="inner-row">{movies}</div>;
}
