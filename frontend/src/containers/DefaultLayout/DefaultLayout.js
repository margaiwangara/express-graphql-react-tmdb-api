import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '@/utils/Loading';
import routes from '@/routes';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

function DefaultLayout() {
  return (
    <>
      <React.Suspense fallback={Loading()}>
        <DefaultHeader />
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
    </>
  );
}

export default DefaultLayout;
