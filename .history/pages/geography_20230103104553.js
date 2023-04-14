import React from "react";
import { useGetGropgraphyQuery } from "../redux/api";

// This page is going to consist of a chart/map that is going to
// display the information in relation where our users are located
// country wise.

// You can see our user doucments actually have a country field which
// stores the country code of where they are located like CN - china
// US - usa ID - india etc.

export default function Geography() {
  // Making an API call to our client/geography route to get
  // the data from it.
  const { data } = useGetGropgraphyQuery();
  return <div>Geography</div>;
}
