import React from 'react';

function Movie({ movie }) {
  return (
    <div className="item">
      <div className="card card--big">
        <div className="card__cover">
          <img src={`@/assets/img/covers/${movie.poster}`} alt={movie.name} />
          <a href={`#${movie.name}`} className="card__play">
            <i className="icon ion-ios-play"></i>
          </a>
        </div>
        <div className="card__content">
          <h3 className="card__title">
            <a href={`#${movie.name}`}>{movie.name}</a>
          </h3>
          <span className="card__category">
            {movie.genre.split(',').map((g, gi) => (
              <a href={`#${g}`} key={gi}>
                {g}
              </a>
            ))}
          </span>
          <span className="card__rate">
            <i className="icon ion-ios-star"></i>
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
