import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { NOW_PLAYING } from "../graphql/queries";

// components
import Movies from "./Movies";

export default function NowShowing() {
  const { loading, error, data } = useQuery(NOW_PLAYING);

  if (loading) return <div>Loading...</div>;

  if (error) console.log(error);

  return <Movies title="In Theatres" data={data.now_playing} />;
}
