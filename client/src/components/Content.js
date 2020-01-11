import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoll, faStar } from "@fortawesome/free-solid-svg-icons";
import poster from "../assets/pic6.jpg";

// components
import Movies from "./Movies";

export default function Content() {
  return (
    <div className="content">
      {/* <h3 className="h3 text-white">New Releases</h3> */}
      <div className="details">
        <div className="details-top">
          <figure>
            <img src={poster} alt="poster-image" />
          </figure>
          <h3 className="h3">The Martian</h3>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, cumque laborum. Delectus aut iure rerum quam neque!
            Adipisci, totam temporibus. Beatae deleniti quisquam ipsam
            doloribus. Ut modi eligendi, impedit vero non possimus atque
            aspernatur, labore ipsa corrupti eius fugiat tempore?
          </p>
        </div>
      </div>
    </div>
  );
}
