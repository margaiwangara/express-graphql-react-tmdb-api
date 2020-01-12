import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { UPCOMING } from "../graphql/queries";

// components
import Movies from "./Movies";

export default function Upcoming() {
  const { loading, error, data } = useQuery(UPCOMING);

  if (loading) return <div className="loading">Loading...</div>;

  if (error) console.log(error);

  return <Movies title="Upcoming" data={data.upcoming} />;
}
