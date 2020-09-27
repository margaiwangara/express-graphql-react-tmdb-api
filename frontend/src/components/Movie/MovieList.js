import React from 'react';
import { Loading } from '@/utils';

const MovieListItem = React.lazy(() => import('./MovieListItem'));

function MovieList({ data }) {
  const Movies = results
    ? results.map((value, id) => <MovieList value={value} key={value.id} />)
    : '';

  return (
    <div className="row mt-5">
      <React.Suspense fallback={Loading()}>{Movies}</React.Suspense>
    </div>
  );
}

export default MovieList;
