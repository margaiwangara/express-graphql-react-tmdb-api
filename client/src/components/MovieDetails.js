import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoll, faStar } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import poster from "../assets/pic6.jpg";

const MOVIE_DETAILS_QUERY = gql`
  query MovieDetailsQuery($movie_id: Int!) {
    movie(movie_id: $movie_id) {
      original_title
      homepage
    }
  }
`;
export default function MovieDetails(props) {
  let { movie_id } = props.match.params;
  movie_id = parseInt(movie_id);
  const { loading, error, data } = useQuery(MOVIE_DETAILS_QUERY, {
    variables: { movie_id }
  });

  if (loading) return <h3 className="h3">Loading...</h3>;
  if (error) console.log(error);

  const { original_title, homepage } = data.movie;

  return (
    <div className="details">
      <div className="details-top">
        <figure>
          <img src={poster} alt="poster-image" />
        </figure>
        <h3 className="h3">{original_title}</h3>
        <div className="content-group">
          <h5 className="h5">Category</h5>
          <p>Adventure, Science Fiction</p>
        </div>
        <div className="content-group">
          <h5 className="h5">Release Date</h5>
          <p>25th Dec 2019</p>
        </div>
        <div className="content-group">
          <h5 className="h5">Runtime</h5>
          <p>2h 40min</p>
        </div>
        <div className="content-group">
          <h5 className="h5">Homepage</h5>
          <p>
            <a href="#">http://somehomepage.com</a>
          </p>
        </div>
      </div>
      <div className="details-bottom">
        <h3 className="h3">Storyline</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          cumque laborum. Delectus aut iure rerum quam neque! Adipisci, totam
          temporibus. Beatae deleniti quisquam ipsam doloribus. Ut modi
          eligendi, impedit vero non possimus atque aspernatur, labore ipsa
          corrupti eius fugiat tempore?
        </p>
      </div>
    </div>
  );
}
