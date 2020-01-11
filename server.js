const express = require("express");
const dotenv = require("dotenv");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");

// GraphQL Schema
const schema = require("./schema");

// init express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// dotenv config
dotenv.config({ path: "./config/config.env" });

// route
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
