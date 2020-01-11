import React from "react";
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
        <div className="details-bottom">some more details</div>
      </div>
    </div>
  );
}
