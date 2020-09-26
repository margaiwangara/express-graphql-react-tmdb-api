import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Movie({ data }) {
  const { id, original_title, poster_path, vote_count, vote_average } = data;
  let imagePath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <div className="card">
      <div
        className="card-top"
        style={{ borderRadius: '10px', overflow: 'hidden' }}
      >
        <figure>
          <Link to={`/${id}`}>
            <img src={imagePath} alt={original_title} />
          </Link>
        </figure>
      </div>
      <div className="card-bottom">
        <h6 className="h6 text-white">
          <Link to={`/${id}`} className="text-white">
            {original_title}
          </Link>
        </h6>
        <h6 className="h6 text-white-o">
          <FontAwesomeIcon icon={faPoll} />
          {' ' + vote_average + ' / ' + vote_count}
        </h6>
      </div>
    </div>
  );
}
