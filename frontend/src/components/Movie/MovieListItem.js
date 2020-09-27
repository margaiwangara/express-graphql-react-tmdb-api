import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import { POSTER_PATH, formatGenre, formatRuntime } from '@/utils';

function MovieListItem({ value }) {
  const [showDetails, setShowDetails] = useState('');

  const displayDetails = (id) => {
    setShowDetails(id);
  };

  const hideDetails = (e) => {
    setShowDetails('');
  };

  return (
    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 mb-3" key={value.id}>
      <div
        className="movie-box"
        onMouseOver={() => displayDetails(value.id)}
        onMouseOut={hideDetails}
      >
        <div className="movie-poster-container shadow-lg">
          <img
            src={`${POSTER_PATH}/${value.poster_path}`}
            alt="movie-poster"
            className="h-100 w-100"
          />
          <span className="movie-rating aligned-rating font-weight-bold">
            {value.vote_average}
          </span>
        </div>
        <div className="movie-details-container py-3">
          <h5 className="text-capitalize movie-title mb-1">
            {value.original_title}
          </h5>
          <h6 className="text-capitalize movie-subtitle small">
            {formatGenre(value.genres)}
          </h6>
        </div>
      </div>
      <div
        className={`movie-details-box ${
          showDetails === value.id ? '' : 'd-none'
        }`}
      >
        <span className="left-pointer"></span>
        <div className="movie-details-box-inner p-3">
          <div className="movie-details-header">
            <div className="details">
              <h5 className="movie-title text-capitalize text-white mb-1">
                {value.original_title}
              </h5>
              <h6 className="small text-muted">{formatGenre(value.genres)}</h6>
            </div>
            <div className="rating">
              <span className="movie-rating py-1 px-3">
                {value.vote_average}
              </span>
            </div>
          </div>
          <p className="text-muted small mt-1">{value.overview}</p>
          <div className="d-flex flex-wrap">
            <h6 className="text-muted small mr-2">
              <FontAwesomeIcon icon="calendar-alt" className="mr-1" />
              <Moment parse="YYYY-MM-DD" format="LL">
                {value.release_date}
              </Moment>
            </h6>
            <h6 className="text-muted small">
              <FontAwesomeIcon icon="clock" className="mr-1" />
              {formatRuntime(value.runtime)}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieListItem;
