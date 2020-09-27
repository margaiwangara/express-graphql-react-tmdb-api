import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '@/utils/Loading';
import routes from '@/routes';

const DefaultNavbar = React.lazy(() => import('./DefaultNavbar'));
const DefaultSidebar = React.lazy(() => import('./DefaultSidebar'));

function DefaultLayout() {
  return (
    <>
      <React.Suspense fallback={Loading()}>
        <DefaultNavbar />
      </React.Suspense>
      <section id="app-body-wrapper">
        <React.Suspense fallback={Loading()}>
          <DefaultSidebar />
        </React.Suspense>
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
      </section>
    </>
  );
}

export default DefaultLayout;
