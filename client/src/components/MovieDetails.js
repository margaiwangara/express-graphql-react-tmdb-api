import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoll, faStar } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@apollo/react-hooks";
import Moment from "react-moment";

import poster from "../assets/pic6.jpg";
import { MOVIE_DETAILS_QUERY } from "../graphql/queries";

function movieRuntime(runtimeInMins) {
  // check if divisible by 60
  if (runtimeInMins % 60 === 0) {
    return `${runtimeInMins / 60}hrs`;
  }

  const hrs = Math.floor(runtimeInMins / 60);
  const mins = runtimeInMins % 60;
  // else get modulus then get remainder and floor
  return hrs > 1
    ? hrs + "hr"
    : hrs + "hrs" + " " + mins > 1
    ? mins + "min"
    : mins + "mins";
}
export default function MovieDetails(props) {
  let { movie_id } = props.match.params;
  movie_id = parseInt(movie_id);
  const { loading, error, data } = useQuery(MOVIE_DETAILS_QUERY, {
    variables: { movie_id }
  });

  if (loading) return <h3 className="h3">Loading...</h3>;
  if (error) console.log(error);

  const {
    original_title,
    homepage,
    genres,
    release_date,
    runtime,
    overview
  } = data.movie;

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
          <p>
            <Moment parse="YYYY-MM-DD" format="LL">
              {release_date}
            </Moment>
          </p>
        </div>
        <div className="content-group">
          <h5 className="h5">Runtime</h5>
          <p>{runtime}</p>
        </div>
        <div className="content-group">
          <h5 className="h5">Homepage</h5>
          <p>
            <a href="#">{homepage}</a>
          </p>
        </div>
      </div>
      <div className="details-bottom">
        <h3 className="h3">Storyline</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
}
