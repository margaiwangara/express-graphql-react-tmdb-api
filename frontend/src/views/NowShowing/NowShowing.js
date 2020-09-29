import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NOW_PLAYING } from '@/graphql/queries';
import Loading from '@/utils/Loading';
import TitleComponent from '@/components/TitleComponent/TitleComponent';

const MovieList = React.lazy(() => import('@/components/Movie/MovieList'));

function NowShowing() {
  const { error, loading, data } = useQuery(NOW_PLAYING);

  if (error) console.log(error);

  if (loading) return Loading();

  const { results } = data.now_playing;
  return (
    <>
      <TitleComponent title="Now Showing" />
      <h3>Now Showing</h3>
      <React.Suspense fallback={Loading()}>
        <MovieList data={results} />
      </React.Suspense>
    </>
  );
}

export default NowShowing;
