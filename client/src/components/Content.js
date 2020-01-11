import React from "react";

// components
import Movies from "./Movies";

export default function Content({ children }) {
  return (
    <div className="content">
      {/* <h3 className="h3 text-white">New Releases</h3> */}
      {children}
    </div>
  );
}
