import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Overlay = () => {
  return (
    <OverlayContainer className="h-100 w-100">
      <div className="row my-5">
        <div className="col-md-6 offset-md-3">
          <div className="app-modal w-100">
            <div className="video-area">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9YffrCViTVk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video-details p-3 row">
              <div className="col-md-6 mb-2">
                <div className="video-details-top d-flex justify-content-between align-items-start flex-wrap">
                  <div className="details-left mb-1">
                    <h5 className="movie-title text-capitalize text-white mb-1">
                      Stop! In the name of love
                    </h5>
                    <h6 className="small text-muted">
                      Action, Romance, Science Fiction
                    </h6>
                  </div>
                  <div className="rating">
                    <span className="movie-rating py-1 px-3">7.5</span>
                  </div>
                </div>
                <p className="text-muted small mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, animi? Magnam blanditiis sed ratione at deserunt
                  assumenda dignissimos impedit distinctio provident! Sapiente
                  deleniti explicabo quaerat nulla quis placeat totam id.
                </p>
                <div className="d-flex flex-wrap flex-column">
                  <div className="d-flex">
                    <h6 className="text-white small mr-2">Release Date:</h6>
                    <h6 className="text-muted small">25th Dec 2020</h6>
                  </div>
                  <div className="d-flex mt-2">
                    <h6 className="text-white small mr-2">Runtime:</h6>
                    <h6 className="text-muted small">2hr 10min</h6>
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
        </div>
      </div>
    </OverlayContainer>
  );
};

const OverlayContainer = styled.div`
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1000;
  content: '';
  left: 0;
  top: 0;

  .app-modal {
    background-color: var(--blackColor);
    box-shadow: 10px 10px 70px 20px rgba(0, 0, 0, 0.75);
    line-height: 1.5;
    border-radius: 10px;
    overflow: hidden;
  }

  .video-area {
    width: 100%;
    height: 0;
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
    position: relative;
    padding-bottom: 56.25%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .video-details {
  }
`;
export default Overlay;
