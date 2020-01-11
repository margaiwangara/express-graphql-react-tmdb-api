import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";

// components
import Movies from "./components/Movies";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Movies />
  </ApolloProvider>
);

export default App;
