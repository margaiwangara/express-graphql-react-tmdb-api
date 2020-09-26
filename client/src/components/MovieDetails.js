import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Moment from 'react-moment';

import { MOVIE_DETAILS_QUERY } from '../graphql/queries';

function formatGenre(genreList) {
  let container = '';

  for (let i = 0; i < genreList.length; i++) {
    container +=
      i !== genreList.length - 1 ? `${genreList[i].name}, ` : genreList[i].name;
  }

  return container;
}

function formatRuntime(runTimeInMins) {
  // 60 mins = 1hr
  const rtHrs = Math.floor(runTimeInMins / 60);
  const rtMins = runTimeInMins % 60;

  // check if rthrs == 0
  if (rtHrs === 0) return `${runTimeInMins}mins`;

  let container = rtHrs > 1 ? `${rtHrs}hrs ` : `${rtHrs}hr `;
  container +=
    rtMins === 0 ? '' : rtMins > 1 ? `${rtMins}mins` : `${rtMins}min`;
  return container;
}

export default function MovieDetails(props) {
  let { movie_id } = props.match.params;
  movie_id = parseInt(movie_id);
  const { loading, error, data } = useQuery(MOVIE_DETAILS_QUERY, {
    variables: { movie_id },
  });

  if (loading) return <div className="loading">Loading...</div>;
  if (error) console.log(error);

  const {
    original_title,
    homepage,
    genres,
    release_date,
    runtime,
    overview,
    poster_path,
  } = data.movie;

  let imagePath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className="details">
      <div className="details-top">
        <figure>
          <img src={imagePath} alt="movie-poster" />
        </figure>
        <h3 className="h3">{original_title}</h3>
        <div className="content-group">
          <h5 className="h5">Category</h5>
          <p>{formatGenre(genres)}</p>
        </div>
        <div className="content-group">
          <h5 className="h5">Release Date</h5>
          <p>
            <Moment parse="YYYY-MM-DD" format="LL">
              {release_date}
            </Moment>
          </p>
        </div>
        <div className="content-group">
          <h5 className="h5">Runtime</h5>
          <p>{formatRuntime(runtime)}</p>
        </div>
        {homepage ? (
          <div className="content-group">
            <h5 className="h5">Homepage</h5>
            <p>
              <a href={`${homepage}`}>{homepage}</a>
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="details-bottom">
        <h3 className="h3">Storyline</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}
