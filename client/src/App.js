import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";

// components
// import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="wrapper">
      <Navbar />
    </div>
  </ApolloProvider>
);

export default App;
