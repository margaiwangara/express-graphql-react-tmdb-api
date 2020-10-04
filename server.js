const express = require('express');
const dotenv = require('dotenv');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const path = require('path');
const redis = require('redis');
const responseTime = require('response-time');

// GraphQL Schema
const schema = require('./schema');

// init express
const app = express();

// const redis
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const redisClient = redis.createClient(REDIS_PORT);
redisClient.on('error', (error) => {
  console.log('redis error', error);
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(responseTime());

// static
app.use(express.static('public'));

// dotenv config
dotenv.config({ path: './config/config.env' });

// route
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == 'development' ? true : false,
    context: { redis: redisClient },
  }),
);

// redirect all routes
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);
