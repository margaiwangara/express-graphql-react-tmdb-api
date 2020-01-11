import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

// components
import Movies from "./Movies";

export default function Content() {
  return (
    <div className="content">
      <h3 className="h3 text-white">New Releases</h3>
      <Movies />
    </div>
  );
}
