import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import TopRated from "./components/TopRated";
import NowShowing from "./components/NowShowing";
import MovieDetails from "./components/MovieDetails";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="wrapper">
        <Navbar />
        <Content>
          <Route exact path="/" component={() => <p>Under Construction</p>} />
          <Route exact path="/movie/popular" component={Popular} />
          <Route exact path="/movie/upcoming" component={Upcoming} />
          <Route exact path="/movie/top-rated" component={TopRated} />
          <Route exact path="/movie/now-showing" component={NowShowing} />
          <Route exact path="/:movie_id" component={MovieDetails} />
        </Content>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
