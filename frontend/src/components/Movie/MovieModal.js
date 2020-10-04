import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModal } from '@/context/app/ModalContext';
import { toggleModal } from '@/context/actions/modal';
import { useMovie } from '@/context/app/MovieContext';
import { POSTER_PATH, formatGenre, formatRuntime } from '@/utils';
import Moment from 'react-moment';

function MovieModal() {
  const { dispatch, state: modalState } = useModal();
  const { state } = useMovie();

  // // check if movie is not empty
  // if (modalState.isOpen && !Object.keys(state.movie).length == 0) {
  //   // close modal
  //   dispatch(toggleModal());
  // }

  const { movie } = state;

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
        <iframe
          title="movie-trailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9YffrCViTVk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
          <p className="small text-muted">
            Sarah Paulson, Finn Wittrock, Judy Davis
          </p>
          <h6 className="text-white small">Homepage</h6>
          <p className="text-muted small">https://homepage.com</p>
          <h6 className="text-white small">Revenue</h6>
          <p className="text-muted small">$200M</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
