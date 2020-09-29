import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '@/utils/Loading';
import routes from '@/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DefaultNavbar = React.lazy(() => import('./DefaultNavbar'));
const DefaultSidebar = React.lazy(() => import('./DefaultSidebar'));

function DefaultLayout() {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  return (
    <>
      <React.Suspense fallback={Loading()}>
        <DefaultNavbar />
      </React.Suspense>
      <section
        id="app-body-wrapper"
        className={`${displaySidebar ? '' : 'hide-sidebar'}`}
      >
        <React.Suspense fallback={Loading()}>
          <DefaultSidebar />
        </React.Suspense>
        <div className="app-body-content-wrapper">
          <div className="container">
            <React.Suspense fallback={Loading()}>
              <Switch>
                {routes.map(
                  (route, index) =>
                    route.component && (
                      <Route
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        key={index}
                        render={(props) => <route.component {...props} />}
                      />
                    ),
                )}
              </Switch>
            </React.Suspense>
          </div>
          <button
            className="app-sidebar-toggler rounded-circle py-2 px-3 shadow-lg"
            onClick={() => setDisplaySidebar(!displaySidebar)}
          >
            <FontAwesomeIcon icon="bars" />
          </button>
        </div>
      </section>
    </>
  );
}

export default DefaultLayout;
