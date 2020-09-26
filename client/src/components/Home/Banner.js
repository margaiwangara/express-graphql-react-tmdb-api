import React from 'react';
import cover from '@/assets/img/covers/cover.jpg';
import homebg from '@/assets/img/home/home__bg.jpg';
import homebg2 from '@/assets/img/home/home__bg2.jpg';
import homebg3 from '@/assets/img/home/home__bg3.jpg';
import homebg4 from '@/assets/img/home/home__bg4.jpg';

// const Movie = React.lazy(() => import('./Movie'));

function Banner() {
  return (
    <>
      <div className="owl-carousel home__bg">
        <div className="item home__cover" data-bg={homebg}></div>
        <div className="item home__cover" data-bg={homebg2}></div>
        <div className="item home__cover" data-bg={homebg3}></div>
        <div className="item home__cover" data-bg={homebg4}></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="home__title">
              <b>NEW ITEMS</b> OF THIS SEASON
            </h1>

            <button className="home__nav home__nav--prev" type="button">
              <i className="icon ion-ios-arrow-round-back"></i>
            </button>
            <button className="home__nav home__nav--next" type="button">
              <i className="icon ion-ios-arrow-round-forward"></i>
            </button>
          </div>
          <div className="col-12">
            <div className="owl-carousel home__carousel">
              <div className="item">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={cover} alt="cover" />
                    <a href="#cover" className="card__play">
                      <i className="icon ion-ios-play"></i>
                    </a>
                  </div>
                  <div className="card__content">
                    <h3 className="card__title">
                      <a href="#title">I Dream in Another Language</a>
                    </h3>
                    <span className="card__category">
                      <a href="#action">Action</a>
                      <a href="#thriller">Thriler</a>
                    </span>
                    <span className="card__rate">
                      <i className="icon ion-ios-star"></i>8.4
                    </span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={cover} alt="cover" />
                    <a href="#cover" className="card__play">
                      <i className="icon ion-ios-play"></i>
                    </a>
                  </div>
                  <div className="card__content">
                    <h3 className="card__title">
                      <a href="#title">I Dream in Another Language</a>
                    </h3>
                    <span className="card__category">
                      <a href="#action">Action</a>
                      <a href="#thriller">Thriler</a>
                    </span>
                    <span className="card__rate">
                      <i className="icon ion-ios-star"></i>8.4
                    </span>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={cover} alt="cover" />
                    <a href="#cover" className="card__play">
                      <i className="icon ion-ios-play"></i>
                    </a>
                  </div>
                  <div className="card__content">
                    <h3 className="card__title">
                      <a href="#title">I Dream in Another Language</a>
                    </h3>
                    <span className="card__category">
                      <a href="#action">Action</a>
                      <a href="#thriller">Thriler</a>
                    </span>
                    <span className="card__rate">
                      <i className="icon ion-ios-star"></i>8.4
                    </span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card card--big">
                  <div className="card__cover">
                    <img src={cover} alt="cover" />
                    <a href="#cover" className="card__play">
                      <i className="icon ion-ios-play"></i>
                    </a>
                  </div>
                  <div className="card__content">
                    <h3 className="card__title">
                      <a href="#title">I Dream in Another Language</a>
                    </h3>
                    <span className="card__category">
                      <a href="#action">Action</a>
                      <a href="#thriller">Thriler</a>
                    </span>
                    <span className="card__rate">
                      <i className="icon ion-ios-star"></i>8.4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
