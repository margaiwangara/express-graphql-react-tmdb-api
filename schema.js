const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat
} = require("graphql");

// Movie
const Movie = new GraphQLObjectType({
  name: "Movie",
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
    popularity: { type: GraphQLInt },
    genres: { type: new GraphQLList(Genre) }
  })
});

// Genre
const Genre = new GraphQLObjectType({
  name: "Genre",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
});

// Popular
const Popular = new GraphQLObjectType({
  name: "Popular",
  fields: () => ({
    page: { type: GraphQLInt },
    results: { type: new GraphQLList(Movie) },
    total_results: { type: GraphQLInt },
    total_pages: { type: GraphQLInt }
  })
});

// Now Playing
const NowPlaying = new GraphQLObjectType({
  name: "NowPlaying",
  fields: () => ({
    page: { type: GraphQLInt },
    dates: {
      type: new GraphQLObjectType({
        name: "Dates",
        fields: () => ({
          maximum: { type: GraphQLString },
          minimum: { type: GraphQLString }
        })
      })
    },
    results: { type: new GraphQLList(Movie) },
    total_results: { type: GraphQLInt },
    total_pages: { type: GraphQLInt }
  })
});

// Top Rated
const TopRated = new GraphQLObjectType({
  name: "TopRated",
  fields: () => ({
    page: { type: GraphQLInt },
    results: { type: new GraphQLList(Movie) },
    total_results: { type: GraphQLInt },
    total_pages: { type: GraphQLInt }
  })
});
// Upcoming

// Root URL
let URL = "https://api.themoviedb.org/3/movie";
// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    movie: {
      type: Movie,
      args: {
        movie_id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`${URL}/${args.movie_id}?api_key=${process.env.TMDB_API_KEY}`)
          .then(response => response.data);
      }
    },
    popular: {
      type: Popular,
      args: {
        page: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(
            `${URL}/popular?api_key=${
              process.env.TMDB_API_KEY
            }&page=${args.page || 1}`
          )
          .then(response => response.data);
      }
    },
    latest: {
      type: Movie,
      resolve(parent, args) {
        return axios
          .get(`${URL}/latest?api_key=${process.env.TMDB_API_KEY}`)
          .then(response => response.data);
      }
    },
    now_playing: {
      type: NowPlaying,
      args: {
        page: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(
            `${URL}/now_playing?api_key=${
              process.env.TMDB_API_KEY
            }&page=${args.page || 1}`
          )
          .then(({ data }) => data);
      }
    },
    top_rated: {
      type: TopRated,
      args: {
        page: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(
            `${URL}/top_rated?api_key=${
              process.env.TMDB_API_KEY
            }&page=${args.page || 1}`
          )
          .then(response => response.data);
      }
    }
  }
});

// export graphql schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
