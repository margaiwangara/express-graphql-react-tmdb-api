import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default function Content() {
  return (
    <div className="content">
      <h3 className="h3 text-white">New Releases</h3>
      <div className="inner-row">
        <div className="card">
          <div className="card-top">image area</div>
          <div className="card-bottom">
            <h5 className="h5 text-white">Home Alone</h5>
            <h6 className="h6 text-white-o">Adventure, Comedy</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
