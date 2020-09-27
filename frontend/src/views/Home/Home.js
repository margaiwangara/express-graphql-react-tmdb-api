import React from 'react';
import TitleComponent from '@/components/TitleComponent/TitleComponent';
import After from '@/assets/images/after.jpg';
import { useQuery } from '@apollo/react-hooks';
import { LATEST_MOVIE } from '@/graphql/queries';
import Loading from '@/utils/Loading';
import { POSTER_PATH } from '@/utils';
import Moment from 'react-moment';

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
          <div
            className="app-banner d-flex justify-content-between"
            style={{ height: '500px' }}
          >
            <div
              className="poster-box rounded"
              style={{ height: '100%', position: 'relative' }}
            >
              <div className="image-box rounded">
                <img
                  src={`${POSTER_PATH}/${latest.poster_path}`}
                  alt="movie-poster"
                  className="h-100"
                />
              </div>
            </div>
            <div className="poster-details d-flex align-items-end justify-content-center flex-column">
              <div className="d-flex align-items-center">
                <h6 className="border-right px-2 text-sm text-muted">
                  <Moment parse="YYYY-MM-DD" format="LL">
                    {latest.release_date}
                  </Moment>
                </h6>
                <h6 className="border-right px-2 text-sm text-muted">
                  {latest.vote_average}/{latest.vote_count} votes
                </h6>
                <h6 className="px-2 text-sm text-muted">
                  {latest.runtime} minutes
                </h6>
              </div>
              <h1 className="text-lg my-3">{latest.original_title}</h1>
              <p className="text-sm text-muted text-right">{latest.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
