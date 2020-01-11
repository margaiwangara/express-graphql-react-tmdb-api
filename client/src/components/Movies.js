import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
const POPULAR_MOVIES = gql`
  {
    popular {
      page
      results {
        id
        original_title
        overview
        runtime
      }
    }
  }
`;

export default function Movies() {
  const { loading, error, data } = useQuery(POPULAR_MOVIES);

  if (loading) return <div>Loading...</div>;

  if (error) console.log(error);

  const movies = data.popular.results.map(movie => (
    <div key={movie.id}>
      <h3>{movie.original_title}</h3>
      <p>{movie.overview}</p>
      <h5>{movie.runtime}</h5>
    </div>
  ));

  return <div>{movies}</div>;
}
