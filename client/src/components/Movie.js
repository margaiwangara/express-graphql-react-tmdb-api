import React from "react";

export default function Movie({ data }) {
  const { original_title, poster_path } = data;
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
        <h6 className="h6 text-white-o">Adventure, Comedy</h6>
      </div>
    </div>
  );
}
