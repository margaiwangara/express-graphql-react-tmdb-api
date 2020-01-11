import React from "react";

// components
import Movie from "./Movie";

export default function Movies(props) {
  console.log(props);
  const movies = props.data.results.map(movie => (
    <Movie key={movie.id} data={movie} />
  ));

  return (
    <div className="movies">
      <div className="inner-row">{movies}</div>;
    </div>
  );
}
