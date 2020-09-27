import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { POPULAR_MOVIES } from '@/graphql/queries';
import Loading from '@/utils/Loading';

const MovieList = React.lazy(() => import('@/components/Movie/MovieList'));

function Popular() {
  const { error, loading, data } = useQuery(POPULAR_MOVIES);

  if (error) console.log(error);

  if (loading) return Loading();

  const { results } = data.popular;

  console.log(data);
  return (
    <>
      <h3>Popular</h3>
      <React.Suspense fallback={Loading()}>
        <MovieList data={results} />
      </React.Suspense>
    </>
  );
}

export default Popular;
