import { gql } from 'apollo-boost';

export const MOVIE_DETAILS_QUERY = gql`
  query MovieDetailsQuery($movie_id: Int!) {
    movie(movie_id: $movie_id) {
      original_title
      overview
      poster_path
      release_date
      runtime
      id
      vote_count
      vote_average
      homepage
      popularity
      genres {
        id
        name
      }
      imdb_id
    }
  }
`;
export const POPULAR_MOVIES = gql`
  query PopularMovies {
    popular {
      results {
        id
        original_title
        poster_path
        vote_count
        vote_average
      }
    }
  }
`;

export const NOW_PLAYING = gql`
  query NowPlaying {
    now_playing {
      results {
        id
        original_title
        poster_path
        vote_count
        vote_average
        overview
        release_date
        runtime
        genres {
          name
        }
      }
    }
  }
`;

export const UPCOMING = gql`
  query Upcoming {
    upcoming {
      results {
        id
        original_title
        poster_path
        vote_count
        vote_average
      }
    }
  }
`;

export const TOP_RATED = gql`
  query TopRated {
    top_rated {
      results {
        id
        original_title
        poster_path
        vote_count
        vote_average
      }
    }
  }
`;
