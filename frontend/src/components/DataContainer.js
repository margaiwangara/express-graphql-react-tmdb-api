import React from "react";
import { useQuery } from "@apollo/react-hooks";

export default function DataContainer({ title, query }) {
  const { loading, error, data } = useQuery(query);

  if (loading)
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );

  if (error) console.log(error);

  // check where data is coming from
  let payload = [];

  return <Movies title={title} data={payload} />;
}
