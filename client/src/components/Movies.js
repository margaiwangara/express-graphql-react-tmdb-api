import React from "react";

// components
import Movie from "./Movie";

export default function Movies(props) {
  const movies = props.data.results.map(movie => (
    <Movie key={movie.id} data={movie} />
  ));

  return (
    <div className="movies">
      <h3 className="h3 text-white">{props.title}</h3>
      <div className="inner-row">{movies}</div>;
    </div>
  );
}
