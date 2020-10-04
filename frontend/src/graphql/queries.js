import { gql } from 'apollo-boost';

export const sharedQuery = `
    original_title
    overview
    backdrop_path
    poster_path
    release_date
    runtime
    id
    vote_count
    vote_average
    homepage
    popularity
    revenue
    genres {
      id
      name
    }
    imdb_id
    videos {
      results {
        key
        site
        id
        type
      }
    }
    credits {
      cast {
        character
        name
        id
        cast_id
      }
    }
`;

export const MOVIE_DETAILS_QUERY = gql`
  query MovieDetailsQuery($movie_id: Int!) {
    movie(movie_id: $movie_id) {
      ${sharedQuery}
    }
  }
`;
export const LATEST_MOVIE = gql`
  query LatestMovie {
    latest {
      ${sharedQuery}
    }
  }
`;
export const POPULAR_MOVIES = gql`
  query PopularMovies {
    popular {
      results {
        ${sharedQuery}
      }
    }
  }
`;

export const NOW_PLAYING = gql`
  query NowPlaying {
    now_playing {
      results {
        ${sharedQuery}
      }
    }
  }
`;

export const UPCOMING = gql`
  query Upcoming {
    upcoming {
      results {
        ${sharedQuery}
      }
    }
  }
`;

export const TOP_RATED = gql`
  query TopRated {
    top_rated {
      results {
        ${sharedQuery}
      }
    }
  }
`;
