import React from 'react';
import Loading from '@/utils/Loading';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

function DefaultLayout() {
  return (
    <React.Suspense fallback={Loading()}>
      <DefaultHeader />
    </React.Suspense>
  );
}

export default DefaultLayout;
