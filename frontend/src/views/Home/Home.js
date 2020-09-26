import React from 'react';
import Loading from '@/utils/Loading';

const Banner = React.lazy(() => import('@/components/Home/Banner'));

function Home() {
  return (
    <>
      <section className="home">
        <React.Suspense fallback={Loading()}>
          <Banner />
        </React.Suspense>
      </section>
    </>
  );
}

export default Home;
