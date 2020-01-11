import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default function Content() {
  return (
    <div className="content">
      <h3 className="h3">Large Title</h3>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <div className="card">
              <p>This is my card</p>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
