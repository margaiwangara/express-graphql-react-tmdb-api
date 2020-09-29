import React from 'react';
import TitleComponent from '@/components/TitleComponent/TitleComponent';
import After from '@/assets/images/after.jpg';
import { useQuery } from '@apollo/react-hooks';
import { LATEST_MOVIE } from '@/graphql/queries';
import Loading from '@/utils/Loading';
import { POSTER_PATH } from '@/utils';
import Moment from 'react-moment';
import logoTransparent from '@/assets/images/tfs-transparent.svg';

function Home() {
  const { loading, error, data } = useQuery(LATEST_MOVIE);

  if (error) console.log(error);

  if (loading) return Loading();

  const { latest } = data;
  return (
    <>
      <TitleComponent title="Home" />
      <div className="row">
        <div className="col-md-12">
          <div className="app-banner row" style={{ height: '500px' }}>
            <div className="col-md-4 col-sm-12 mb-5">
              <div
                className="poster-box rounded w-100 h-100"
                style={{ position: 'relative' }}
              >
                {latest.poster_path ? (
                  <div className="image-box rounded shadow-lg">
                    <img
                      src={`${POSTER_PATH}/${latest.poster_path}`}
                      alt="movie-poster"
                      className="h-100"
                    />
                  </div>
                ) : (
                  <div
                    className="h-100 d-flex align-items-center justify-content-center shadow-lg"
                    style={noPosterStyling}
                  >
                    <img
                      src={logoTransparent}
                      alt="app-logo"
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="poster-details ml-2 h-100 w-100">
                <div className="d-flex align-items-center">
                  {latest.release_date ? (
                    <h6 className="border-right px-2 text-sm text-muted">
                      <Moment parse="YYYY-MM-DD" format="LL">
                        {latest.release_date}
                      </Moment>
                    </h6>
                  ) : (
                    ''
                  )}
                  <h6 className="border-right px-2 text-sm text-muted">
                    {latest.vote_average}/{latest.vote_count} votes
                  </h6>
                  <h6 className="px-2 text-sm text-muted">
                    {latest.runtime} minutes
                  </h6>
                </div>
                <h1 className="my-3">{latest.original_title}</h1>
                <p className="text-sm text-muted">{latest.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const noPosterStyling = {
  backgroundColor: 'var(--blackColor)',
  borderRadius: '8px',
  // border: 'solid 2px var(--primaryAlternativeColor)',
};
export default Home;
