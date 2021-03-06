import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSpinner,
  faArrowRight,
  faCalendarAlt,
  faClock,
  faBars,
  faTimesCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Loading from './utils/Loading';
import ContextStore from './context/store';

// components
const MainComponent = React.lazy(() => import('./containers/Main/Main'));

// add fonts to library
library.add(
  fab,
  faSpinner,
  faArrowRight,
  faCalendarAlt,
  faClock,
  faBars,
  faTimesCircle,
  faTimes,
);

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/graphql'
      : 'https://twentyfourseven.margaiwangara.me/graphql',
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ContextStore>
          <Helmet>
            <meta
              name="description"
              content="A platform to track and view movies"
            />
            <meta
              name="keywords"
              content="twentyfourseven, movies, latest, upcoming, new arrivals, 24/7"
            />
            <meta name="author" content="Margai Wangara" />
          </Helmet>
          <div id="app-wrapper">
            <React.Suspense fallback={Loading()}>
              <MainComponent />
            </React.Suspense>
          </div>
        </ContextStore>
      </ApolloProvider>
    </Router>
  );
}

export default App;
