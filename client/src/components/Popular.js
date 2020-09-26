import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { POPULAR_MOVIES } from "../graphql/queries";

// components
import Movies from "./Movies";

export default function Popular() {
  const { loading, error, data } = useQuery(POPULAR_MOVIES);

  if (loading)
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );

  if (error) console.log(error);

  return <Movies title="Popular" data={data.popular} />;
}
