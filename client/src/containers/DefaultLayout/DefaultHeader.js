import React from 'react';
import Loading from '@/utils/Loading';

const DefaultNavbar = React.lazy(() => import('./DefaultNavbar'));

function DefaultHeader() {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <React.Suspense fallback={Loading()}>
                <DefaultNavbar />
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>
      <form action="#" className="header__search">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__search-content">
                <input
                  type="text"
                  placeholder="Search for a movie, TV Series that you are looking for"
                />

                <button type="button">search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </header>
  );
}

export default DefaultHeader;
