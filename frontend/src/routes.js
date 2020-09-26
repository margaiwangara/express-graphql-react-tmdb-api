import React from 'react';

const Home = React.lazy(() => import('@/views/Home/Home'));

const routes = [
  {
    name: 'Home',
    exact: true,
    component: Home,
    path: '/',
  },
];

export default routes;
