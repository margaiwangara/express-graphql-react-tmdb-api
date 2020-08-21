import React from 'react';
import { Route, Switch } from 'react-router-dom';

const DefaultLayout = React.lazy(() =>
  import('@/containers/DefaultLayout/DefaultLayout'),
);

function Main() {
  return (
    <Switch>
      <Route to="/" component={DefaultLayout} />
    </Switch>
  );
}

export default Main;
