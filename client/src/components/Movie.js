import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoll } from "@fortawesome/free-solid-svg-icons";
export default function Movie({ data }) {
  const { original_title, poster_path, vote_count, vote_average } = data;
  let imagePath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className="card">
      <div className="card-top">
        <figure>
          <img src={imagePath} alt={original_title} />
        </figure>
      </div>
      <div className="card-bottom">
        <h5 className="h5 text-white">{original_title}</h5>
        <h6 className="h6 text-white-o">
          <FontAwesomeIcon icon={faPoll} />
          {" " + vote_average + " / " + vote_count}
        </h6>
      </div>
    </div>
  );
}
