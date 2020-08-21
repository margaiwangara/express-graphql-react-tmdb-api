import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

// icons
import apple32 from './assets/icon/favicon-32x32.png';
import apple72 from './assets/icon/apple-touch-icon-72x72.png';
import apple114 from './assets/icon/apple-touch-icon-114x114.png';
import apple144 from './assets/icon/apple-touch-icon-144x144.png';

const client = new ApolloClient({
  uri: '/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Helmet>
      <link rel="apple-touch-icon" href={apple32} />
      <link rel="apple-touch-icon" sizes="72x72" href={apple72} />
      <link rel="apple-touch-icon" sizes="114x114" href={apple114} />
      <link rel="apple-touch-icon" sizes="144x144" href={apple144} />
      <meta name="description" content="A platform to track and view movies" />
      <meta
        name="keywords"
        content="twentyfourseven, movies,latest, upcoming,new arrivals"
      />
      <meta name="author" content="Margai Wangara" />
    </Helmet>
  </ApolloProvider>
);

export default App;
