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

// icons
import apple32 from './assets/icon/favicon-32x32.png';
import apple72 from './assets/icon/apple-touch-icon-72x72.png';
import apple114 from './assets/icon/apple-touch-icon-114x114.png';
import apple144 from './assets/icon/apple-touch-icon-144x144.png';

// components
const MainComponent = React.lazy(() => import('./containers/Main/Main'));

// add fonts to library
library.add(fab, faSpinner);

const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  useEffect(() => {
    appendScript('/assets/js/jquery-3.3.1.min.js');
    appendScript('/assets/js/bootstrap.bundle.min.js');
    appendScript('/assets/js/carousel.min.js');
    appendScript('/assets/js/jquery.mousewheel.min.js');
    appendScript('/assets/js/jquery.mCustomScrollbar.min.js');
    appendScript('/assets/js/wNumb.js');
    appendScript('/assets/js/nouislider.min.js');
    appendScript('/assets/js/jquery.morelines.min.js');
    appendScript('/assets/js/photoswipe.min.js');
    appendScript('/assets/js/photoswipe-ui-default.min.js');
    appendScript('/assets/js/main.js');
  }, []);
  return (
    <Router>
      <ApolloProvider client={client}>
        <Helmet>
          <link rel="apple-touch-icon" href={apple32} />
          <link rel="apple-touch-icon" sizes="72x72" href={apple72} />
          <link rel="apple-touch-icon" sizes="114x114" href={apple114} />
          <link rel="apple-touch-icon" sizes="144x144" href={apple144} />
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
