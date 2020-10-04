const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
  GraphQLInputObjectType,
} = require('graphql');
const redis = require('./utils/redis');
const { promisifyRedis, getDataFromRedis } = require('./utils/redis');

const REDIS_EXPIRE = 3600;

// Movie
const Movie = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    title: { type: GraphQLString },
    adult: { type: GraphQLBoolean },
    original_title: { type: GraphQLString },
    overview: { type: GraphQLString },
    poster_path: { type: GraphQLString },
    release_date: { type: GraphQLString },
    revenue: { type: GraphQLInt },
    runtime: { type: GraphQLInt },
    original_language: { type: GraphQLString },
    backdrop_path: { type: GraphQLString },
    id: { type: GraphQLInt },
    video: { type: GraphQLBoolean },
    vote_count: { type: GraphQLInt },
    vote_average: { type: GraphQLFloat },
    homepage: { type: GraphQLString },
    budget: { type: GraphQLInt },
    imdb_id: { type: GraphQLString },
    popularity: { type: GraphQLFloat },
    genres: { type: new GraphQLList(Genre) },
    genre_ids: { type: new GraphQLList(GraphQLInt) },
    videos: {
      type: new GraphQLObjectType({
        name: 'Videos',
        fields: () => ({
          results: { type: new GraphQLList(Video) },
        }),
      }),
    },
    credits: {
      type: new GraphQLObjectType({
        name: 'Credits',
        fields: () => ({
          cast: { type: new GraphQLList(Cast) },
        }),
      }),
    },
  }),
});

// Genre
const Genre = new GraphQLObjectType({
  name: 'Genre',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

// Videos
const Video = new GraphQLObjectType({
  name: 'Video',
  fields: () => ({
    id: { type: GraphQLString },
    key: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    site: { type: GraphQLString },
    size: { type: GraphQLInt },
  }),
});

// Credits
const Cast = new GraphQLObjectType({
  name: 'Cast',
  fields: () => ({
    cast_id: { type: GraphQLInt },
    character: { type: GraphQLString },
    credit_id: { type: GraphQLString },
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    order: { type: GraphQLInt },
    profile_path: { type: GraphQLString },
  }),
});

// Dates
const Dates = new GraphQLObjectType({
  name: 'Dates',
  fields: () => ({
    maximum: { type: GraphQLString },
    minimum: { type: GraphQLString },
  }),
});

// Query Optimization
const withoutDates = {
  page: { type: GraphQLInt },
  results: { type: new GraphQLList(Movie) },
  total_results: { type: GraphQLInt },
  total_pages: { type: GraphQLInt },
};

const withDates = {
  ...withoutDates,
  dates: { type: Dates },
};

// Popular
const Popular = new GraphQLObjectType({
  name: 'Popular',
  fields: () => ({
    page: { type: GraphQLInt },
    results: { type: new GraphQLList(Movie) },
    total_results: { type: GraphQLInt },
    total_pages: { type: GraphQLInt },
  }),
});

// Now Playing
const NowPlaying = new GraphQLObjectType({
  name: 'NowPlaying',
  fields: () => ({
    page: { type: GraphQLInt },
    dates: { type: Dates },
    results: { type: new GraphQLList(Movie) },
    total_results: { type: GraphQLInt },
    total_pages: { type: GraphQLInt },
  }),
});

// Top Rated
const TopRated = new GraphQLObjectType({
  name: 'TopRated',
  fields: () => ({
    page: { type: GraphQLInt },
    results: { type: new GraphQLList(Movie) },
    total_results: { type: GraphQLInt },
    total_pages: { type: GraphQLInt },
  }),
});

// Upcoming
const Upcoming = new GraphQLObjectType({
  name: 'Upcoming',
  fields: () => ({
    page: { type: GraphQLInt },
    dates: { type: Dates },
    results: { type: new GraphQLList(Movie) },
    total_results: { type: GraphQLInt },
    total_pages: { type: GraphQLInt },
  }),
});

// Root URL
let URL = 'https://api.themoviedb.org/3/movie';
// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    movie: {
      type: Movie,
      args: {
        movie_id: { type: GraphQLInt },
      },
      resolve(parent, args, { redis }) {
        return axios
          .get(
            `${URL}/${args.movie_id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos,credits`,
          )
          .then(({ data }) => {
            return promisifyRedis(redis, data.id)
              .then((redisResponse) => {
                if (redisResponse == null) {
                  // check if contains adult content
                  if (!data.adult) {
                    // if nothing is found in redis, store the data
                    redis.setex(data.id, 3600, JSON.stringify(data));

                    // return data from api
                    return data;
                  }
                  return;
                } else {
                  // return redis data
                  return JSON.parse(redisResponse);
                }
              })
              .catch((redisError) => {
                console.log(redisError);
                return redisError;
              });
          });
      },
    },
    popular: {
      type: Popular,
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args, { redis }) {
        return axios
          .get(
            `${URL}/popular?api_key=${process.env.TMDB_API_KEY}&page=${
              args.page || 1
            }`,
          )
          .then(({ data }) => {
            // check if data exists in redis, else make request to server, reduces number of requests
            const collection = data.results.map((value) => {
              return getDataFromRedis(redis, value.id)
                .then((response) => {
                  return response;
                })
                .catch((error) => {
                  return error;
                });
            });

            if (collection.length > 0) {
              return {
                page: data.page,
                results: collection,
                total_pages: data.total_pages,
                total_results: data.total_results,
              };
            }

            return data;
          });
      },
    },
    latest: {
      type: Movie,
      resolve(parent, args, { redis }) {
        return axios
          .get(`${URL}/latest?api_key=${process.env.TMDB_API_KEY}`)
          .then((response) => {
            redis.setex(
              response.data.id,
              REDIS_EXPIRE,
              JSON.stringify(response.data),
            );

            return response.data;
          });
      },
    },
    now_playing: {
      type: NowPlaying,
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args, { redis }) {
        return axios
          .get(
            `${URL}/now_playing?api_key=${process.env.TMDB_API_KEY}&page=${
              args.page || 1
            }`,
          )
          .then(({ data }) => {
            const collection = data.results.map((value) => {
              return getDataFromRedis(redis, value.id)
                .then((response) => {
                  return response;
                })
                .catch((error) => {
                  return error;
                });
            });

            if (collection.length > 0) {
              return {
                page: data.page,
                dates: data.dates,
                results: collection,
                total_pages: data.total_pages,
                total_results: data.total_results,
              };
            }

            return data;
          });
      },
    },
    top_rated: {
      type: TopRated,
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args, { redis }) {
        return axios
          .get(
            `${URL}/top_rated?api_key=${process.env.TMDB_API_KEY}&page=${
              args.page || 1
            }`,
          )
          .then(({ data }) => {
            // attach genres

            const collection = data.results.map((value) => {
              return getDataFromRedis(redis, value.id)
                .then((response) => {
                  return response;
                })
                .catch((error) => {
                  return error;
                });
            });

            if (collection.length > 0) {
              return {
                page: data.page,
                results: collection,
                total_pages: data.total_pages,
                total_results: data.total_results,
              };
            }

            return data;
          });
      },
    },
    upcoming: {
      type: Upcoming,
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args, { redis }) {
        return axios
          .get(
            `${URL}/upcoming?api_key=${process.env.TMDB_API_KEY}&page=${
              args.page || 1
            }`,
          )
          .then(({ data }) => {
            // attach genres

            const collection = data.results.map((value) => {
              return getDataFromRedis(redis, value.id)
                .then((response) => {
                  return response;
                })
                .catch((error) => {
                  return error;
                });
            });

            if (collection.length > 0) {
              return {
                page: data.page,
                dates: data.dates,
                results: collection,
                total_pages: data.total_pages,
                total_results: data.total_results,
              };
            }

            return data;
          });
      },
    },
  },
});

// export graphql schema
module.exports = new GraphQLSchema({
  query: RootQuery,
});
