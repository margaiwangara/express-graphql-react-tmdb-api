import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModal } from '@/context/app/ModalContext';
import { toggleModal } from '@/context/actions/modal';
import { useMovie } from '@/context/app/MovieContext';
import {
  POSTER_PATH,
  formatGenre,
  formatRuntime,
  formatRevenue,
  YOUTUBE_PATH,
} from '@/utils';
import Moment from 'react-moment';

function MovieModal() {
  const { dispatch } = useModal();
  const { state } = useMovie();

  // // check if movie is not empty
  // if (modalState.isOpen && !Object.keys(state.movie).length == 0) {
  //   // close modal
  //   dispatch(toggleModal());
  // }

  const { movie } = state;

  // get movie main video
  const trailer = movie.videos.results
    ? movie.videos.results.filter(
        (value, index) => value.type === 'Trailer' && value.site === 'YouTube',
      )
    : [];

  let cast = movie.credits.cast
    ? movie.credits.cast.map((value, index) => value.name)
    : [];

  // join cast
  cast = cast.length > 0 ? cast.join(', ') : 'N/A';

  return (
    <div className="app-modal w-100">
      <button
        className="close-app-modal"
        type="button"
        onClick={() => dispatch(toggleModal())}
      >
        <FontAwesomeIcon icon="times" />
      </button>
      <div className="video-area">
        {trailer.length > 0 ? (
          <iframe
            title={`${movie.original_title}-trailer`}
            width="560"
            height="315"
            src={`${YOUTUBE_PATH}/${trailer[0].key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={`${POSTER_PATH}${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        )}
      </div>
      <div className="video-details p-3 row">
        <div className="col-md-6 mb-2">
          <div className="video-details-top d-flex justify-content-between align-items-start flex-wrap">
            <div className="details-left mb-1">
              <h5 className="movie-title text-capitalize text-white mb-1">
                {movie.original_title}
              </h5>
              <h6 className="small text-muted">{formatGenre(movie.genres)}</h6>
            </div>
            <div className="rating">
              <span className="movie-rating py-1 px-3">
                {movie.vote_average}
              </span>
            </div>
          </div>
          <p className="text-muted small mt-1">{movie.overview}</p>
          <div className="d-flex flex-wrap flex-column">
            <div className="d-flex">
              <h6 className="text-white small mr-2">Release Date:</h6>
              <h6 className="text-muted small">
                {movie.release_date ? (
                  <Moment parse="YYYY-MM-DD" format="LL">
                    {movie.release_date}
                  </Moment>
                ) : (
                  'N/A'
                )}
              </h6>
            </div>
            <div className="d-flex mt-2">
              <h6 className="text-white small mr-2">Runtime:</h6>
              <h6 className="text-muted small">
                {movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h6 className="text-white small">Cast</h6>
          <p className="small text-muted">{cast}</p>
          <h6 className="text-white small">Homepage</h6>
          {movie.homepage ? (
            <p className="small">
              <a href={movie.homepage}>{movie.homepage}</a>
            </p>
          ) : (
            <p className="text-muted small">N/A</p>
          )}
          <h6 className="text-white small mb-1">Revenue</h6>
          <p
            style={{
              fontSize: '1.5rem',
              color: 'var(--primaryAlternativeColor)',
            }}
          >
            ${formatRevenue(movie.revenue, 2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
