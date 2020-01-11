import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Movies from "./components/Movies";
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
          <Route exact path="/" component={Movies} />
          <Route exact path="/:movie_id" component={MovieDetails} />
        </Content>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
