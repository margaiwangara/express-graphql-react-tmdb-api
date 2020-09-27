import React from 'react';
import Loading from '@/utils/Loading';
import After from '@/assets/images/after.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = React.lazy(() => import('@/components/Home/Banner'));

function Home() {
  return (
    <>
      <h3>New Releases</h3>
      <div className="row mt-5">
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12">
          <div className="movie-box">
            <div className="movie-poster-container shadow-lg">
              <img src={After} alt="movie-poster" className="h-100 w-100" />
              <span className="movie-rating aligned-rating font-weight-bold">
                9.0
              </span>
            </div>
            <div className="movie-details-container py-3">
              <h5 className="text-capitalize movie-title mb-1">
                After We Colided
              </h5>
              <h6 className="text-capitalize movie-subtitle small">
                Mystery, Romance
              </h6>
            </div>
          </div>
          <div className="movie-details-box">
            <span className="left-pointer"></span>
            <div className="movie-details-box-inner p-3">
              <div className="movie-details-header">
                <div className="details">
                  <h5 className="movie-title text-capitalize text-white mb-1">
                    After We Colided
                  </h5>
                  <h6 className="small text-muted">Mystery, Romance</h6>
                </div>
                <div className="rating">
                  <span className="movie-rating py-1 px-3">9.0</span>
                </div>
              </div>
              <p className="text-muted small mt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti, officia corporis voluptatem exercitationem recusandae
                fugiat itaque assumenda iure nam ullam.
              </p>
              <div className="d-flex flex-wrap">
                <h6 className="text-muted small mr-2">
                  <FontAwesomeIcon icon="calendar-alt" className="mr-1" />
                  25th Dec 2020
                </h6>
                <h6 className="text-muted small">
                  <FontAwesomeIcon icon="clock" className="mr-1" />
                  1hr 20min
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12"></div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12"></div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12"></div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-12"
          style={{ position: 'relative' }}
        ></div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12"></div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <button className="btn load-more-button">Load More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
