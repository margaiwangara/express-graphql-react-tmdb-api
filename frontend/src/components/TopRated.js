import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { TOP_RATED } from "../graphql/queries";

// components
import Movies from "./Movies";

export default function TopRated() {
  const { loading, error, data } = useQuery(TOP_RATED);

  if (loading) return <div className="loading">Loading...</div>;

  if (error) console.log(error);

  return <Movies title="Top Rated" data={data.top_rated} />;
}
