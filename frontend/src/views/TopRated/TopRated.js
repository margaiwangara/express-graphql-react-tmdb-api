import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { TOP_RATED } from '@/graphql/queries';
import Loading from '@/utils/Loading';

const MovieList = React.lazy(() => import('@/components/Movie/MovieList'));

function TopRated() {
  const { error, loading, data } = useQuery(TOP_RATED);

  if (error) console.log(error);

  if (loading) return Loading();

  const { results } = data.top_rated;

  console.log(data);
  return (
    <>
      <h3>Top Rated</h3>
      <React.Suspense fallback={Loading()}>
        <MovieList data={results} />
      </React.Suspense>
    </>
  );
}

export default TopRated;
