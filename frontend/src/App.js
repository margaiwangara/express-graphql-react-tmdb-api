import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Loading from './utils/Loading';
import { appendScript } from '@/utils/appendScript';

// components
const MainComponent = React.lazy(() => import('./containers/Main/Main'));

// add fonts to library
library.add(fab, faSpinner);

const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  useEffect(() => {
    // appendScript('/assets/js/jquery-3.3.1.min.js');
  }, []);
  return (
    <Router>
      <ApolloProvider client={client}>
        <Helmet>
          <meta
            name="description"
            content="A platform to track and view movies"
          />
          <meta
            name="keywords"
            content="twentyfourseven, movies,latest, upcoming,new arrivals"
          />
          <meta name="author" content="Margai Wangara" />
        </Helmet>
        <React.Suspense fallback={Loading()}>
          <MainComponent />
        </React.Suspense>
      </ApolloProvider>
    </Router>
  );
}

export default App;