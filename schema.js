const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} = require("graphql");

// Popular

// Latest

// Now Playing

// Top Rated

// Upcoming

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
    vote_average: { type: GraphQLInt },
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
