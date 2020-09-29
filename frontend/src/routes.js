import React from 'react';

const Home = React.lazy(() => import('@/views/Home/Home'));
const NowShowing = React.lazy(() => import('@/views/NowShowing/NowShowing'));
const Popular = React.lazy(() => import('@/views/Popular/Popular'));
const TopRated = React.lazy(() => import('@/views/TopRated/TopRated'));
const Upcoming = React.lazy(() => import('@/views/Upcoming/Upcoming'));

const routes = [
  {
    name: 'Home',
    exact: true,
    component: Home,
    path: '/',
  },
  {
    name: 'Now Showing',
    exact: true,
    component: NowShowing,
    path: '/now-showing',
  },
  {
    name: 'Popular',
    exact: true,
    component: Popular,
    path: '/popular',
  },
  {
    name: 'Top Rated',
    exact: true,
    component: TopRated,
    path: '/top-rated',
  },
  {
    name: 'Upcoming',
    exact: true,
    component: Upcoming,
    path: '/upcoming',
  },
];

export default routes;
