import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { UPCOMING } from '@/graphql/queries';
import Loading from '@/utils/Loading';
import TitleComponent from '@/components/TitleComponent/TitleComponent';

const MovieList = React.lazy(() => import('@/components/Movie/MovieList'));

function Upcoming() {
  const { error, loading, data } = useQuery(UPCOMING);

  if (error) console.log(error);

  if (loading) return Loading();

  const { results } = data.upcoming;

  console.log(data);
  return (
    <>
      <TitleComponent title="Upcoming" />
      <h3>Upcoming</h3>
      <React.Suspense fallback={Loading()}>
        <MovieList data={results} />
      </React.Suspense>
    </>
  );
}

export default Upcoming;
