import React from 'react';
import Loading from '@/utils/Loading';

const MovieListItem = React.lazy(() => import('./MovieListItem'));

function MovieList({ data }) {
  const Movies = data
    ? data.map((value, id) => {
        if (!value.adult) {
          return <MovieListItem value={value} key={value.id} />;
        }
      })
    : '';

  return (
    <div className="row mt-5">
      <React.Suspense fallback={Loading()}>{Movies}</React.Suspense>
    </div>
  );
}

export default MovieList;
