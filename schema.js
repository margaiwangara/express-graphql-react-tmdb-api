const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
} = require('graphql');

// Movie
const Movie = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
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
      resolve(parent, args) {
        return axios
          .get(`${URL}/${args.movie_id}?api_key=${process.env.TMDB_API_KEY}`)
          .then(({ data }) => data);
      },
    },
    popular: {
      type: Popular,
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `${URL}/popular?api_key=${process.env.TMDB_API_KEY}&page=${
              args.page || 1
            }`,
          )
          .then(({ data }) => {
            // attach genres

            const collection = data.results.map((value) => {
              return axios
                .get(`${URL}/${value.id}?api_key=${process.env.TMDB_API_KEY}`)
                .then((res) => {
                  return res.data;
                  // console.log('inside map', res);
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
      resolve(parent, args) {
        return axios
          .get(`${URL}/latest?api_key=${process.env.TMDB_API_KEY}`)
          .then((response) => response.data);
      },
    },
    now_playing: {
      type: NowPlaying,
      args: {
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `${URL}/now_playing?api_key=${process.env.TMDB_API_KEY}&page=${
              args.page || 1
            }`,
          )
          .then(({ data }) => {
            // attach genres

            const collection = data.results.map((value) => {
              return axios
                .get(`${URL}/${value.id}?api_key=${process.env.TMDB_API_KEY}`)
                .then((res) => {
                  return res.data;
                  // console.log('inside map', res);
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
      resolve(parent, args) {
        return axios
          .get(
            `${URL}/top_rated?api_key=${process.env.TMDB_API_KEY}&page=${
              args.page || 1
            }`,
          )
          .then(({ data }) => {
            // attach genres

            const collection = data.results.map((value) => {
              return axios
                .get(`${URL}/${value.id}?api_key=${process.env.TMDB_API_KEY}`)
                .then((res) => {
                  return res.data;
                  // console.log('inside map', res);
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
      resolve(parent, args) {
        return axios
          .get(
            `${URL}/upcoming?api_key=${process.env.TMDB_API_KEY}&page=${
              args.page || 1
            }`,
          )
          .then(({ data }) => {
            // attach genres

            const collection = data.results.map((value) => {
              return axios
                .get(`${URL}/${value.id}?api_key=${process.env.TMDB_API_KEY}`)
                .then((res) => {
                  return res.data;
                  // console.log('inside map', res);
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
